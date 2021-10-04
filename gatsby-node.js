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
const { createFilePath } = require('gatsby-source-filesystem');

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

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // The “graphql” function allows us to run arbitrary
  // queries against the local Drupal graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  return graphql(
    `
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
     `,
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create Asciidoc pages.
    const postTemplate = path.resolve('./src/templates/post.js');
    result.data.allBlog.edges.forEach((edge) => {
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
  });
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
        fromPath: path.join('/blog', parent.relativeDirectory.replace(/^\/blog/, '')),
        toPath: frontmatter.redirect_url,
        isPermanent: true,
      });
      return;
    }
    if (frontmatter?.layout === 'refresh' && frontmatter?.refresh_to_post_id) {
      // FIXME - drop blog
      createRedirect({
        fromPath: path.join('/blog', parent.relativeDirectory.replace(/^\/blog/, '')),
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
        strippedHtml: stripHtml(node.html).result,
        slug: path.join('/blog', datedFileSlug(date, parent.name)),
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
      if (!blogNode.links) {
        blogNode.links = {};
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
        slug: `/blog/authors/${parent.name.toLowerCase()}/`,
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
