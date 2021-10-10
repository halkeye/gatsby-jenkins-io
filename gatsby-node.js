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
const https = require('https');
const { slash } = require('gatsby-core-utils');

const avatarBaseDir = path.resolve(path.join('.', 'content', 'images', 'avatars'));
const avatars = fs.readdirSync(avatarBaseDir)
  .filter((file) => !file.startsWith('.'))
  // fancy code that converts an array (of files) to map of filename => full path
  .reduce((prev, curr) => ({ ...prev, [path.parse(curr).name.toLowerCase()]: `avatars/${curr}` }), {});

const dateFromFilename = (parent) => {
  const date = new Date(Date.parse(parent.name.substring(0, 10).replace(/-$/g, '')));
  if (!date || Number.isNaN(date.getTime())) {
    console.log('no date', parent);
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

const cleanName = (name) => name.toLowerCase().replace(/\.html$/, '').replace(/^index$/, '');

const createAllSimplePages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const allResults = await graphql(`
    {
      allSimplePage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  if (allResults.errors) {
    throw allResults.errors;
  }
  return Promise.all(allResults.data.allSimplePage.edges.map((edge) => createPage({
    path: edge.node.slug,
    component: slash(path.resolve('./src/templates/simplepage.js')),
    context: {
      id: edge.node.id,
    },
  })));
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
    await Promise.all(Array.from({ length: numPages }).map((_, i) => createPage({
      path: i === 0 ? '/blog' : `/blog/page/${i + 1}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })));
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
    await Promise.all(Array.from({ length: numPages }).map((_, i) => createPage({
      path: i === 0 ? author.slug : `${author.slug}/page/${i + 1}`,
      component: path.resolve('./src/templates/author-blog-list-template.js'),
      context: {
        author: author.id,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })));
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
    Promise.all((Array.from({ length: numPages }) || [0]).map((_, i) => createPage({
      path: i === 0 ? slug : `${slug}/page/${i + 1}`,
      component: path.resolve('./src/templates/tag-blog-list-template.js'),
      context: {
        tag,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })));
  }
};

const createIndividualBlogPosts = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const individualPostResults = await graphql(`
  {
    allBlog(
      sort: { fields: [date], order: ASC }
      limit: 1000
    ) {
      edges {
        next {
          slug
        }
        node {
          id
          slug
        }
        previous {
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
  await Promise.all(individualPostResults.data.allBlog.edges.map((edge) => createPage({
    path: edge.node.slug,
    component: slash(postTemplate),
    context: {
      next: edge.next?.slug,
      previous: edge.previous?.slug,
      id: edge.node.id,
    },
  })));
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createAllSimplePages({ graphql, actions }),
    createAllBlogPages({ graphql, actions }),
    createAllAuthorPages({ graphql, actions }),
    createIndividualBlogPosts({ graphql, actions }),
    createAllTagPages({ graphql, actions }),
  ]);
};

exports.onCreateNode = async ({
  node, actions, getNode, createNodeId, createContentDigest, reporter,
}) => {
  const {
    createNode, createParentChildLink, createRedirect, createNodeField,
  } = actions;
  if (node.internal.type === 'File') {
    if (node.sourceInstanceName === 'images') {
      const dir = path.join(__dirname, 'public', 'images', node.relativeDirectory);
      await fs.promises.mkdir(dir, { recursive: true });
      await fs.promises.copyFile(node.absolutePath, path.join(dir, node.base));
    }
  }

  if (node.internal.type === 'SupportersYaml') {
    if (node.logo) {
      createNodeField({
        name: 'logo',
        node,
        value: `sponsors/${node.logo}`,
      });
    }
  }
  if (node.internal.type === 'Asciidoc') {
    const parent = getNode(node.parent);
    const frontmatter = Object.entries(node.frontmatter || {}).reduce((prev, [key, value]) => ({ ...prev, [key.replace(/^:/, '').trim()]: value }), {});
    if (parent.name === 'index') {
      console.log('ignoring', parent.absolutePath, frontmatter);
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
    if (parent.sourceInstanceName === 'authors') {
      const authorNode = {
        ...frontmatter,
        id: parent.name,
        parent: node.id,
        html: node.html,
        slug: `/${['blog', 'author', parent.relativeDirectory, cleanName(parent.name)].filter(Boolean).join('/')}`,
        avatar: avatars[parent.name.toLowerCase()],
        internal: {
          type: 'Author',
        },
      };
      authorNode.internal.contentDigest = createContentDigest(authorNode);
      createParentChildLink({ parent: node, child: await createNode(authorNode) });
      return;
    }
    if (parent.sourceInstanceName === 'events') {
      for (const field of ['date', 'title', 'link']) {
        if (!frontmatter[field]) {
          reporter.panic(new Error(`No '${field}' specified: ${parent.name}`));
        }
      }
      const eventNode = {
        ...frontmatter,
        id: parent.name,
        parent: node.id,
        html: node.html,
        slug: path.join(parent.relativeDirectory, cleanName(parent.name)), // FIXME
        internal: {
          // FIXME - if event is over, it moves to expired events?
          type: 'Event',
        },
      };

      // confirm dates are good
      for (const field of ['date', 'endDate']) {
        if (eventNode[field]) {
          const parsedDate = new Date(Date.parse(eventNode[field]));
          if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
            reporter.panic(new Error(`Bad iso ${field} for: ${parent.name}`));
          }
          eventNode[field] = parsedDate;
        }
      }

      eventNode.internal.contentDigest = createContentDigest(eventNode);
      createParentChildLink({ parent: node, child: await createNode(eventNode) });
      return;
    }
    if (frontmatter.layout === 'simplepage') {
      const simplePageNode = {
        ...frontmatter,
        id: parent.relativePath,
        parent: node.id,
        html: node.html,
        slug: path.join(parent.relativeDirectory, cleanName(parent.name)),
        internal: {
          type: 'SimplePage',
        },
      };
      simplePageNode.internal.contentDigest = createContentDigest(simplePageNode);
      createParentChildLink({ parent: node, child: await createNode(simplePageNode) });
      return;
    }
    // probably isn't needed, but just in case for non blog/author
    // const slug = createFilePath({ node, getNode });
    // createNodeField({
    //  name: 'slug',
    //  node,
    //  value: slug,
    // });
    //
    if (frontmatter.layout === 'post' && parent.relativeDirectory.startsWith('blog/')) {
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
        // console.log(frontmatter);
        reporter.warn(`${parent.name} is authorless`);
        blogNode.authors = [];
      }
      if (blogNode.opengraph && blogNode.opengraph.image) {
        // :fingerscrossed: that normalize will make this work in windows, TODO - test later
        blogNode.opengraph.image = path.normalize(blogNode.opengraph.image.replace(/^\/images\//, `${path.resolve('./content/images/')}/`));
      }
      blogNode.internal.contentDigest = createContentDigest(blogNode);
      createParentChildLink({ parent: node, child: await createNode(blogNode) });
    }
    /*
    console.log({
      absolutePath: parent.absolutePath,
      relativeDirectory: parent.relativeDirectory,
      frontmatter,
    });
    */
    // console.log(parent, node);
    // process.exit(1);
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createFieldExtension, createTypes } = actions;
  const { buildObjectType } = schema;
  createTypes([
    buildObjectType({
      name: 'Event',
      interfaces: ['Node'],
      fields: {
        hasEnded: {
          type: 'Boolean!',
          resolve: (source) => {
            if (!source.endDate) {
              // if it has no end date, then it starts as soon as start date is hit
              return new Date(source.date) <= new Date();
            }
            return new Date(source.endDate) <= new Date();
          },
        },
      },
    }),
  ]);
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

    type Author implements Node {
      id: ID!
      name: String!
      github: String
      html: String!
      slug: String!
      twitter: String
      linkedin: String
      irc: String
      blog: String
    }

    type SimplePage implements Node {
      id: ID!
      parent: Node
      layout: String
      title: String
      html: String
      slug: String
      section: String
      description: String
      uneditable: Boolean
      project: String
      kind: String
    }
  `);
};

exports.onPreBootstrap = async () => {
  const download = function (url, dest) {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);
      https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve); // close() is async, call cb after close completes.
        });
      }).on('error', (err) => { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        reject(err);
      });
    });
  };

  await download('https://raw.githubusercontent.com/cdfoundation/artwork/main/cdf/icon/color/cdf-icon-color.svg', './src/images/cdf.svg');
};

/*
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData)
    }
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}
*/
