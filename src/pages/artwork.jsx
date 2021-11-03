/* Please add new logo meta-data to content/images/logos and content/_data/logo */
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ArtworkCredit = ({ url, credit }) => {
  if (!credit) { return null; }
  if (url) {
    return (
      <>
        Created by
        {' '}
        <a href={url}>{credit}</a>
      </>
    );
  }
  return (
    <>
      Created by
      {' '}
      {credit}
    </>
  );
};
ArtworkCredit.displayName = 'ArtworkCredit';

const ArtworkPage = ({ data }) => (
  <Layout notitle title="Jenkins Artwork">
    <Seo title="Jenkins Artwork" />

    <div className="container">
      <div className="row">&nbsp;</div>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">
            Artwork
          </h1>
          <p>
            The original Jenkins logo was created by our friends at
            <a href="https://frontside.io/">
              Frontside.
            </a>
            Special thanks to
            <a href="https://github.com/cowboyd">
              Charles Lowell
            </a>
            {`for his efforts championing the logo's original design. Usage
            guidelines for the original logo can be found on our`}
            <a href="/press">
              Press
            </a>
            {`page. This page simply catalogues the many clever variations of Jenkins
            created by members of the Jenkins community.`}
          </p>
          <p>
            {`
            These images are also available in various sizes and SVG formats
            online, or as a zip file.  These are licensed under the
            `}
            <a href="https://creativecommons.org/licenses/by-sa/3.0/">
              Creative Commons Attribution-ShareAlike 3.0 Unported License
            </a>
            {`. Under the terms of this license, you must include an attribution to the
            Jenkins project, with a link (https://jenkins.io/), if you display
            these logos or derivates thereof.`}
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="row">
        {data.allLogoYaml.edges.map(({ node: logo }) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="text-center">
              <h3>{logo.name}</h3>
              <a href={logo.url} target="_blank" rel="noreferrer noopener">
                <img className="logo-thumb" src={logo.url_256 || logo.vector} alt={logo.name} />
              </a>
              <p>
                <ArtworkCredit credit={logo.credit} url={logo.credit_url} />
                {logo.source && (
                  <>
                    <br />
                    <a href={logo.source_url} target="_blank" rel="noreferrer noopener">{logo.source}</a>
                  </>
                )}
                {logo.vector && (
                  <>
                    <br />
                    <small><a href={logo.vector} target="_blank" rel="noreferrer noopener">SVG Format</a></small>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>
            3D model
          </h2>
          <p>
            {'3D version of Mr.Jenkins is '}
            <a href="https://www.shapeways.com/model/2183445/mr-jenkins.html?materialId=26">available here</a>
            {' for order. If you want to print your own, '}
            <a href="https://drive.google.com/file/d/1tdPch-TKVF6T7w3Et9aVYRnE-fRtm3cR/view?usp=sharing">the data is here.</a>
          </p>
          <p>
            {' As per the license of the original artwork, the 3D data model is under the same '}
            <a href="http://creativecommons.org/licenses/by-sa/3.0/">
              Creative Commons Attribution-ShareAlike 3.0 Unported License
            </a>
            {'. The 3D logo design is by '}
            <a href="https://www.fast-d.com/search/engineers/2798">
              akiki
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>
            Adding a Logo
          </h3>
          <p>
            {'In order to add a new logo, please refer to the '}
            <a href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-logo">
              CONTRIBUTING guidelines
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ArtworkPage.displayName = 'ArtworkPage';

export default ArtworkPage;
export const pageQuery = graphql`
query ArtworkPageQuery {
  allLogoYaml {
    edges {
      node {
        url
        url_256
        source_url
        source
        name
        id
        credit_url
        credit
        vector
      }
    }
  }
}`;
