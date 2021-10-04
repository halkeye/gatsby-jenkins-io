/* eslint-disable no-restricted-syntax, no-await-in-loop */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const requireEsm = require('esm')(module);

const { stripHtml } = requireEsm('string-strip-html');
const path = require('path');
const fs = require('fs');
const { slash } = require('gatsby-core-utils');

const avatarBaseDir = path.resolve(path.join('.', 'content', 'images', 'avatars'));
const avatars = fs.readdirSync(avatarBaseDir)
  .filter((file) => !file.startsWith('.'))
  // fancy code that converts an array (of files) to map of filename => full path
  .reduce((prev, curr) => ({ ...prev, [path.parse(curr).name.toLowerCase()]: path.resolve(path.join(avatarBaseDir, curr)) }), {});

const dateFromFilename = (parent) => {
  const date = new Date(Date.parse(parent.name.substring(0, 10).replace(/-$/g, '')));
  if (!date || Number.isNaN(date.getTime())) {
    console.log(parent);
    return null; // parent.relativeDirectory + parent.name
  }
  return date;
};

const datedFileSlug = (date, name) => {
  if (!date) {
    return name.replace(/^index$/, '');
  }
  return [
    date.getUTCFullYear().toString().padStart(4, 0),
    (date.getUTCMonth() + 1).toString().padStart(2, 0),
    date.getUTCDate().toString().padStart(2, 0),
    name.replace(/^\d+-\d+-\d+-/, ''),
    '', // trailing slash
  ].join('/');
};

const createAllBlogPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const allBlogResults = await graphql(`
    {
      allBlog(
        sort: { fields: [date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if (allBlogResults.errors) {
    throw allBlogResults.errors;
  } else {
    const posts = allBlogResults.data.allBlog.edges;
    const postsPerPage = 8;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/blog' : `/blog/page/${i + 1}`,
        component: path.resolve('./src/templates/blog-list-template.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }
};

const createAllAuthorPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const eachAuthorResults = await graphql('{ allAuthor { edges { node { id, slug } } } }');
  if (eachAuthorResults.errors) {
    throw eachAuthorResults.errors;
  }
  for (const { node: author } of eachAuthorResults.data.allAuthor.edges) {
    const allBlogResults = await graphql(`
      {
        allBlog(
          filter: {authors: {elemMatch: {id: {in: ["${author.id}"]}}}}
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    if (allBlogResults.errors) {
      throw allBlogResults.errors;
    }
    const posts = allBlogResults.data.allBlog.edges;
    const postsPerPage = 8;
    const numPages = Math.ceil(posts.length / postsPerPage) || 1;
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? author.slug : `${author.slug}/page/${i + 1}`,
        component: path.resolve('./src/templates/author-blog-list-template.js'),
        context: {
          author: author.id,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }
};

const createAllTagPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const eachTagsResults = await graphql('{ tags: allBlog { distinct(field: tags) } }');

  if (eachTagsResults.errors) {
    throw eachTagsResults.errors;
  }
  for (const tag of eachTagsResults.data.tags.distinct) {
    const allBlogResults = await graphql(`
      {
        allBlog(filter: {tags: {in: "${tag}"}}) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    if (allBlogResults.errors) {
      throw allBlogResults.errors;
    }
    const posts = allBlogResults.data.allBlog.edges;
    const postsPerPage = 8;
    const numPages = Math.ceil(posts.length / postsPerPage);
    const slug = `/node/tags/${tag}`;
    (Array.from({ length: numPages }) || [0]).forEach((_, i) => {
      createPage({
        path: i === 0 ? slug : `${slug}/page/${i + 1}`,
        component: path.resolve('./src/templates/tag-blog-list-template.js'),
        context: {
          tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }
};

const createIndividualBlogPosts = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const individualPostResults = await graphql(`
   {
     allBlog(limit: 1000) {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
 `);
  if (individualPostResults.errors) {
    throw individualPostResults.errors;
  }
  // Create Asciidoc pages.
  const postTemplate = path.resolve('./src/templates/post.js');
  individualPostResults.data.allBlog.edges.forEach((edge) => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createAllBlogPages({ graphql, actions }),
    createAllAuthorPages({ graphql, actions }),
    createIndividualBlogPosts({ graphql, actions }),
    createAllTagPages({ graphql, actions }),
  ]);
};

exports.onCreateNode = async ({
  node, actions, getNode, createNodeId, createContentDigest, reporter,
}) => {
  const { createNode, createRedirect } = actions;
  if (node.internal.type === 'File') {
    if (node.sourceInstanceName === 'images') {
      const dir = path.join(__dirname, 'public', 'images', node.relativeDirectory);
      await fs.promises.mkdir(dir, { recursive: true });
      await fs.promises.copyFile(node.absolutePath, path.join(dir, node.base));
    }
  }

  if (node.internal.type === 'Asciidoc') {
    const parent = getNode(node.parent);
    const frontmatter = Object.entries(node.frontmatter || {}).reduce((prev, [key, value]) => ({ ...prev, [key.replace(/^:/, '').trim()]: value }), {});
    if (parent.name === 'index') {
      console.log('ignoring', parent.absolutePath, node);
      // TODO - maybe do something with this eventually?
      return;
    }
    if (frontmatter?.layout === 'redirect' && frontmatter?.redirect_url) {
      // FIXME - drop blog
      createRedirect({
        fromPath: path.join('/blog', parent.relativeDirectory.replace(/^\/blog/, ''), parent.name.replace(/^\d+-\d+-\d+-/, '')),
        toPath: frontmatter.redirect_url,
        isPermanent: true,
      });
      return;
    }
    if (frontmatter?.layout === 'refresh' && frontmatter?.refresh_to_post_id) {
      // FIXME - drop blog
      createRedirect({
        fromPath: path.join('/blog', parent.relativeDirectory.replace(/^\/blog/, ''), parent.name.replace(/^\d+-\d+-\d+-/, '')),
        toPath: frontmatter.refresh_to_post_id,
        isPermanent: true,
      });
      return;
    }
    // probably isn't needed, but just in case for non blog/author
    // const slug = createFilePath({ node, getNode });
    // createNodeField({
    //  name: 'slug',
    //  node,
    //  value: slug,
    // });
    // TODO - - next if post.layout != 'post'
    if (parent.sourceInstanceName === 'blog') {
      const date = dateFromFilename(parent);
      const blogNode = {
        ...frontmatter,
        id: createNodeId(node.id),
        parent: node.id,
        html: node.html,
        slug: path.join('/blog', datedFileSlug(date, parent.name)).trim(),
        date,
        internal: {
          type: 'Blog',
        },
      };
      if (!blogNode) {
        blogNode.tags = [];
      }
      if (blogNode.author) {
        blogNode.authors = [blogNode.author];
        delete blogNode.author;
      }
      // some default values for links
      blogNode.links = { discourse: '', ...(blogNode.links || {}) };
      // it needs to be the same type
      if (blogNode.links.discourse === true) {
        blogNode.links.discourse = '*';
      }

      if (!blogNode.authors) {
        console.log(frontmatter);
        reporter.warn(`${parent.name} is authorless`);
        blogNode.authors = [];
      }
      if (blogNode.opengraph && blogNode.opengraph.image) {
        // :fingerscrossed: that normalize will make this work in windows, TODO - test later
        blogNode.opengraph.image = path.normalize(blogNode.opengraph.image.replace(/^\/images\//, `${path.resolve('./content/images/')}/`));
      }
      blogNode.internal.contentDigest = createContentDigest(blogNode);
      createNode(blogNode);
    }
    if (parent.sourceInstanceName === 'author') {
      const authorNode = {
        ...frontmatter,
        id: parent.name,
        parent: node.id,
        html: node.html,
        slug: `/blog/authors/${parent.name.toLowerCase()}`.trim(),
        avatar: avatars[parent.name.toLowerCase()],
        internal: {
          type: 'Author',
        },
      };
      authorNode.internal.contentDigest = createContentDigest(authorNode);
      createNode(authorNode);
    }
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;
  createFieldExtension({
    name: 'strippedHtml',
    extend(/* options, prevFieldConfig */) {
      return {
        resolve(source) {
          return stripHtml(source.html).result;
        },
      };
    },
  });
  createTypes(`
    type Blog implements Node {
      strippedHtml: String @strippedHtml
    }
  `);
};
