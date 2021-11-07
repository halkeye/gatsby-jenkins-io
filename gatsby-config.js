/* eslint-disable no-restricted-syntax, no-console */
try {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  require('dotenv').config();
} catch (e) {
  console.warn('problem loading .env', e);// expected in production
}

const asciidoctor = require('asciidoctor')();

asciidoctor.Extensions.register(function Extensions() {
  this.inlineMacro(function PluginMacro() {
    const self = this;
    self.named('plugin');
    self.positionalAttributes('label');
    self.process((parent, target, attrs) => self.createAnchor(
      parent,
      attrs.label,
      {
        type: 'link',
        target: `https://plugins.jenkins.io/${target}`,
      },
    ));
  });
});

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

module.exports = {
  siteMetadata: {
    title: 'Jenkins',
    description: 'Jenkins - an open source automation server which enables developers around the world to reliably build, test, and deploy their software',
    author: '@jenkinsci',
    siteUrl: 'https://www.jenkins.io/',
    url: 'https://plugins.jenkins.io/',
    titleTemplate: '%s | Jenkins',
    image: 'https://jenkins.io/images/logo-title-opengraph.png',
    twitterUsername: '@JenkinsCI',
    buildDate: new Date(),
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    /*
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.jenkins.io',
      },
    },
    */
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'authors',
        path: `${__dirname}/content/_data/authors`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'events',
        path: `${__dirname}/content/_data/events`,
        ignore: ['**/2020-01-30-fosdem.adoc'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
        // this will ignore ./jenkins.io/content/images/jams/ToulouseJam/README.asciidoc
        // FIXME - unignore later when more processing is done
        ignore: ['**/CHANGELOG.adoc', '**/README.adoc', '**/README.asciidoc'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        // escape hatch for when restarting gatsby a lot (debugging gatsby configs)
        path: process.env.USE_JUNK ? `${__dirname}/junk` : `${__dirname}/content`,
        ignore: [
          '**/doc/developer/tutorial/index.adoc', // broken files for now
          '**/_config',
          '**/_ext',
          '**/_layouts',
          '**/_partials',
          '**/_includes',
          '**/.gitkeep',
          '**/.htaccess',
          '**/CHANGELOG.adoc',
          '**/README.adoc',
          '**/doc/tutorials/kubernetes/installing-jenkins-on-kubernetes/*.yaml', // example files that cannot be processed by transform-yaml
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-asciidoc',
      options: {
        attributes: {
          'skip-front-matter': true,

          imagesdir: '/images@',
          'attribute-missing': 'warn',
          relfileprefix: '../',
          outfilesuffix: '/',
          idprefix: '',
          idseparator: '-',
          icons: 'font',
          sectanchors: '',
          linkattrs: '',
          'source-highlighter': 'coderay',
          'coderay-css': 'style',
          prewrap: null,
          fragment: '',
          notitle: '',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allWeeklyYaml}}) => {
              return allWeeklyYaml.edges.map(({node: release}) => {
                return {
                  title: `Jenkins ${release.version}`,
                  link: `${site.siteMetadata.siteUrl}/changelog/#${release.version}`,
                  guid: `${site.siteMetadata.siteUrl}/changelog/#${release.version}`,
                  pubDate: new Date(release.date).toUTCString(),
                  date: new Date(release.date).toUTCString(),
                  description: `<ul>
                    ${release.changes.map(change => {return `<li>${capitalize(change.type).replace(/rfe/i, 'RFE')} ${change.message}</li>`;})}
                  </ul>`,
                }
              })
            },
            query: `
              {
                allWeeklyYaml(limit: 30, sort: {order: DESC, fields: machineVersion}) {
                  edges {
                    node {
                      banner
                      changes {
                        message
                        pull
                        type
                        references {
                          issue
                          pull
                          title
                          url
                        }
                      }
                      date
                      id
                      version
                    }
                  }
                }
              }
            `,
            output: "/changelog/rss.xml",
            title: "Jenkins Changelog",
            description: "Changelog for Jenkins weekly releases",
            match: "^/changelog/",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        dest: `${__dirname}/schema.graphql`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-meta-redirect', // needs to be last apparently
  ],
  mapping: {
    'Blog.authors': 'Author.id',
    'Blog.opengraph.image': 'File.absolutePath',
    'Author.avatar': 'File.relativePath',
    'SupportersYaml.fields.logo': 'File.relativePath',
    'AwardsYaml.image': 'File.relativePath',
    'LogoYaml.url': 'File.relativePath',
    'LogoYaml.vector': 'File.relativePath',
  }
};

// fancy little script to take any ENV variables starting with GATSBY_CONFIG_ and
// replace the existing export
Object.keys(process.env).forEach((key) => {
  const PREFIX = 'GATSBY_CONFIG_';
  if (!key.startsWith(PREFIX)) {return;}
  // take the env key, less the prefix, split by __ to get the section,
  // then lowercase, and replace _[letter] to be [upper]
  // so GATSBY_CONFIG_SITE_METADATA__URL => siteMetadata.url = value
  const splits = key.substr(PREFIX.length).split('__').map((k) => k.toLowerCase().replace(/_(.)/, (_, val) => val.toUpperCase()));
  let element = module.exports;
  for (const keyPart of splits.slice(0, -1)) {
    element = element[keyPart];
    if (!element) {
      console.log(`cant find ${keyPart} of ${key}`);
      return;
    }
  }
  element[splits.slice(-1)[0]] = process.env[key];
});
