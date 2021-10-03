/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const { slash } = require('gatsby-core-utils');
const { createFilePath } = require('gatsby-source-filesystem');

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
  const { createNodeField, createNode, createRedirect } = actions;
  if (node.internal.type === 'File') {
    if (node.sourceInstanceName === 'images') {
      const dir = path.join(__dirname, 'public', 'images', node.relativeDirectory);
      await fs.promises.mkdir(dir, { recursive: true });
      await fs.promises.copyFile(node.absolutePath, path.join(dir, node.base));
    }
  }

  if (node.internal.type === 'Asciidoc') {
    const parent = getNode(node.parent);
    // probably isn't needed, but just in case for non blog/author
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
    if (parent.sourceInstanceName === 'blog') {
      const date = new Date(Date.parse(parent.name.match(/^(\d+-\d+-\d+)/)[0]));
      const blogNode = {
        id: createNodeId(node.id),
        parent: node.id,
        html: node.html,
        slug: [
          '', // initial slash
          'blog',
          date.getUTCFullYear().toString().padStart(4, 0),
          (date.getUTCMonth() + 1).toString().padStart(2, 0),
          date.getUTCDate().toString().padStart(2, 0),
          parent.name.replace(/^\d+-\d+-\d+-/, ''),
          '', // trailing slash
        ].join('/'),
        date,
        internal: {
          type: 'Blog',
        },
      };
      if (node.frontmatter.layout === 'redirect' && node.frontmatter.redirect_url) {
        createRedirect({
          fromPath: blogNode.slug,
          toPath: node.frontmatter.redirect_url,
          isPermanent: true,
        });
        return;
      }
      // TODO - - next if post.layout != 'post'

      Object.entries(node.frontmatter).forEach(([key, value]) => { blogNode[key.replace(/^:/, '').trim()] = value; });
      if (!blogNode) {
        blogNode.tags = [];
      }
      if (blogNode.author) {
        blogNode.authors = [blogNode.author];
        delete blogNode.author;
      }
      if (!blogNode.authors) {
        reporter.warn(`${parent.name} is authorless`);
        blogNode.authors = [];
      }
      blogNode.internal.contentDigest = createContentDigest(blogNode);

      createNode(blogNode);
    }
    if (parent.sourceInstanceName === 'author') {
      const authorNode = {
        id: parent.name,
        parent: node.id,
        html: node.html,
        slug: `/blog/authors/${parent.name.toLowerCase()}/`,
        internal: {
          type: 'Author',
        },
      };
      Object.entries(node.frontmatter).forEach(([key, value]) => { authorNode[key.replace(/^:/, '').trim()] = value; });
      if (node.frontmatter.avatar) {
        authorNode.avatar = path.resolve(`./content/images/avatars/${node.frontmatter.avatar}`);
      }
      authorNode.internal.contentDigest = createContentDigest(authorNode);
      createNode(authorNode);
    }
  }
};
