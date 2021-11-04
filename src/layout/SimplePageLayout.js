import * as React from 'react';
import Layout from '../components/layout';

const SimplePageLayout = ({ children, title, ...props }) => (
  <Layout {...props} title={title}>
    <div className="container">
      <div className="row body">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  </Layout>
);

SimplePageLayout.displayName = 'SimplePageLayout';
export default SimplePageLayout;
