import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogPosts from '../components/BlogPostsListing';
import Author from '../components/Author';

const BlogPage = ({ pageContext, data }) => (
  <Layout>
    <div className="container">
      <Author key={data.author.id} blogroll={false} {...data.author} />
    </div>
    <div className="container">
      <BlogPosts pageContext={pageContext} blogs={data.allBlogs.edges} prefix={data.author.slug} />
    </div>
  </Layout>
);
BlogPage.displayName = 'BlogPage';

export default BlogPage;

export const pageQuery = graphql`
  query authorAndBlogsPage($skip: Int!, $limit: Int!, $author: String!) {
    author(id: {eq: $author}) {
      ...AuthorFragment
    }
    allBlog(
      filter: {authors: {elemMatch: {id: {in: [$author]}}}}
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
