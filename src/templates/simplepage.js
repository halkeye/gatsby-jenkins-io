import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const SimplePage = ({ data }) => {
  const {
    title, html, notitle,
  } = data.simplePage;
  return (
    <Layout>
      <div className="container">
        <div className="row body">
          <div className="col-md-12">
            <div className="content-top">
              {!notitle && (<h1>{title}</h1>)}
              <div style={{ float: 'right', clear: 'all' }}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
SimplePage.displayName = 'Post';

export default SimplePage;

export const pageQuery = graphql`
  query($id: String!) {
    simplePage(id: { eq: $id }) {
      html
      id
      title
    }
  }
`;

// <style>.toc {float: right;}</style>
