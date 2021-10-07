const Haml = require('haml');
const grayMatter = require('gray-matter');

async function onCreateNode({
  node,
  actions,
  // pathPrefix,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) {
  if (!['haml'].includes(node.extension)) {
    return;
  }

  const { createNode, createParentChildLink } = actions;

  const content = await loadNodeContent(node);
  const matter = grayMatter(content);

  const html = Haml.render(matter.content, {});

  const hamlNode = {
    id: createNodeId(`${node.id} >>> HAML`),
    parent: node.id,
    internal: {
      type: 'Haml',
      mediaType: 'text/html',
    },
    children: [],
    html,
    frontmatter: matter.data || {},
  };

  hamlNode.internal.contentDigest = createContentDigest(hamlNode);
  createNode(hamlNode);
  createParentChildLink({ parent: node, child: hamlNode });
}

// const withPathPrefix = (pathPrefix, url) => (pathPrefix + url).replace(/\/\//, '/');

exports.onCreateNode = onCreateNode;
