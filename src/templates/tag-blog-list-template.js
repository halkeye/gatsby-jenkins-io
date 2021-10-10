import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogPosts from '../components/BlogPostsListing';

const BlogPage = ({ pageContext, data }) => (
  <Layout>
    <div className="container">
      <div id="block-block-15" className="block block-block even blog-posts">
        <h3 className="title">Recent Blog Posts</h3>
      </div>
      <BlogPosts pageContext={pageContext} blogs={data.allBlogs.edges} prefix={`/node/tags/${pageContext.tag}`} />
    </div>
  </Layout>
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
