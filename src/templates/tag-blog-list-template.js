import * as React from 'react';
import { graphql } from 'gatsby';

import SimplePageLayout from '../layout/SimplePageLayout';
import BlogPosts from '../components/BlogPostsListing';

const BlogPage = ({ pageContext, data }) => (
  <SimplePageLayout title="Recent Blog Posts">
    <BlogPosts pageContext={pageContext} blogs={data.allBlog.edges} prefix={`/node/tags/${pageContext.tag}`} />
  </SimplePageLayout>
);
BlogPage.displayName = 'TagBlogListTemplate';

export default BlogPage;

export const pageQuery = graphql`
  query tagAndBlogsPage($skip: Int!, $limit: Int!, $tag: String!) {
    allBlog(
      filter: {tags: {in: [$tag]}}
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
