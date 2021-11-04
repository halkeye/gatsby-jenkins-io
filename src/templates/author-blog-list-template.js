import * as React from 'react';
import { graphql } from 'gatsby';

import SimplePageLayout from '../layout/SimplePageLayout';
import BlogPosts from '../components/BlogPostsListing';
import Author from '../components/Author';

const BlogPage = ({ pageContext, data }) => (
  <SimplePageLayout>
    <div className="container">
      <Author key={data.author.id} blogroll={false} {...data.author} />
    </div>
    <div className="container">
      <BlogPosts pageContext={pageContext} blogs={data.allBlog.edges} prefix={data.author.slug} />
    </div>
  </SimplePageLayout>
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
