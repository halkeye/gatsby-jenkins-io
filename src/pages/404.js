import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout title="404: Not Found">
    <Seo title="404: Not found" />
    <div className="errorcontainer" style={{ textAlign: 'center', margin: '30px' }}>
      <StaticImage src="../../jenkins.io/content/images/fire-jenkins.svg.png" alt="jenkins on fire logo" />
      <h1>The page you requested could not be found.</h1>
      {/* TODO Add suggestions for frequently accessed pages, recently moved pages, etc.? */}
    </div>

  </Layout>
);
NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
