import * as React from 'react';
import { graphql } from 'gatsby';

import SimplePageLayout from '../layout/SimplePageLayout';
import BlogPostsListing from '../components/BlogPostsListing';

const BlogPage = ({ pageContext, data }) => (
  <SimplePageLayout title="Recent Blog Posts">
    <BlogPostsListing pageContext={pageContext} blogs={data.allBlog.edges} prefix="/blog" />
  </SimplePageLayout>
);
BlogPage.displayName = 'BlogPage';

export default BlogPage;

export const pageQuery = graphql`
  query blogPage($skip: Int!, $limit: Int!) {
    allBlog(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...BlogListFragment
        }
      }
    }
  }
`;
