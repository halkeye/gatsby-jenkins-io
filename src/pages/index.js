import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import DownloadBanner from '../components/DownloadBanner';
import Video from '../components/Video';
import Events from '../components/Events';
import BlogPostsListing from '../components/BlogPostsListing';
import ProjectCarousel from '../components/ProjectCarousel';

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Jenkins" />
    <DownloadBanner />
    <ProjectCarousel background="#000000" backgroundImage={data.carouselBG.publicURL} slides={data.allSlidesYaml.edges.map((edge) => edge.node)} />

    <div className="segment" id="feature-list-segment">
      <div className="container">
        <div className="row chunks features uniform-height">
          <div className="col-md-6 col-lg-4">
            <div className="box cicd">
              <i className="icon-arrow-shuffle" />
              <h5>
                Continuous Integration and Continuous Delivery
              </h5>
              <p>
                As an extensible automation server, Jenkins can be used as a simple
                CI server or turned into the continuous delivery hub for any project.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box install">
              <i className="icon-download" />
              <h5>
                Easy installation
              </h5>
              <p>
                Jenkins is a self-contained Java-based program, ready to run
                out-of-the-box, with packages for Windows, Linux, macOS and other
                Unix-like operating systems.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box settings">
              <i className="icon-settings" />
              <h5>
                Easy configuration
              </h5>
              <p>
                Jenkins can be easily set up and configured via its web interface,
                which includes on-the-fly error checks and built-in help.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box ecosystem">
              <i className="icon-plug" />
              <h5>
                Plugins
              </h5>
              <p>
                With hundreds of plugins in the Update Center, Jenkins integrates
                with practically every tool in the continuous integration and
                continuous delivery toolchain.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box extend">
              <i className="icon-puzzle-piece" />
              <h5>
                Extensible
              </h5>
              <p>
                Jenkins can be extended via its plugin architecture, providing
                nearly infinite possibilities for what Jenkins can do.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box distributed">
              <i className="icon-uniE602" />
              <h5>
                Distributed
              </h5>
              <p>
                Jenkins can easily distribute work across multiple machines,
                helping drive builds, tests and deployments across multiple
                platforms faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Video />
    <div className="container">
      <div className="section events">
        <div className="container-fluid events no-margin">
          <div className="row">
            <div className="col-md-12 events horizontal" id="sidebar">
              <Events events={data.allEvent.edges} />
            </div>
          </div>
        </div>
      </div>
      <div className="section blogs f9f9f9">
        <div className="container">
          <div className="row body">
            <div className="col-md-1" />
            <div className="col-md-10" id="content">
              <div id="content-top" />
              <BlogPostsListing blogs={data.allBlog.edges} />
            </div>
            <div className="col-md-1" />
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    </div>
    <div className="jumbotron" id="sponsorsblock">
      <div className="sponsors">
        <p>
          <strong>
            We thank the following organizations for their major commitments to
            support the Jenkins project.
          </strong>
        </p>
        <ul>
          {data.bigSupporters.edges.map(({ node: supporter }) => (
            <li key={supporter.name}>
              <a href={supporter.url} rel="noreferrer noopener" target="_blank">
                <GatsbyImage image={getImage(supporter.fields.logo)} alt={supporter.name} title={supporter.name} style={{ verticalAlign: 'baseline' }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="supporters">
        <p>
          <strong>
            We thank the following organizations for their support of the Jenkins
            project through free and/or open source licensing programs.
          </strong>
        </p>
        <ul>
          {data.notbigSupporters.edges.map(({ node: supporter }) => (
            <li key={supporter.name}>
              <a href={supporter.url} rel="noreferrer noopener" target="_blank">{supporter.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

IndexPage.displayName = 'IndexPage';
export default IndexPage;

export const pageQuery = graphql`
query IndexPage {
  carouselBG: file(relativePath: {eq: "cdf/cdf-background-wide.jpg"}) {
    publicURL
  }
  bigSupporters: allSupportersYaml(filter: {big: {eq: true}}) {
    edges {
      node {
        name
        url
        fields {
          logo {
            childImageSharp {
              gatsbyImageData(
                height: 128
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
  notbigSupporters: allSupportersYaml(filter: {big: {ne: true}}) {
    edges {
      node {
        name
        url
      }
    }
  }
  allEvent(
    sort: {fields: date}
    filter: {hasEnded: {eq: false}}
  ) {
    edges {
      node {
        ...EventFragment
      }
    }
  }
  allBlog(
    sort: { fields: [date], order: DESC }
    limit: 10
  ) {
    edges {
      node {
        ...BlogListFragment
      }
    }
  }
  allSlidesYaml {
    edges {
      node {
        _href
        _intro
        _title
        _image {
          _height
          _src {
            childImageSharp {
              gatsbyImageData(height: 300)
            }
          }
        }
        _call_to_action {
          _href
          _text
        }
        id
      }
    }
  }
}
`;
