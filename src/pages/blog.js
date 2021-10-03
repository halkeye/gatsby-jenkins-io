import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import TagList from '../components/TagList';

import { reactJoin, SHORT_MONTH_NAMES } from '../utils';

const Post = ({
  slug, date, title, strippedHtml, authors, tags,
}) => {
  const dateObj = new Date(date);
  return (
    <li className="post">
      <Link to={slug} className="body">
        <div className="header">
          <div className="date">
            <div className="month">
              {SHORT_MONTH_NAMES[dateObj.getUTCMonth()].padStart(2)}
            </div>
            <div className="day">
              {dateObj.getUTCDate().toString().padStart(2)}
            </div>
          </div>
          <h5 className="title">
            {title}
          </h5>
        </div>
        <p className="teaser">
          {strippedHtml}
          <span className="more" />
        </p>
      </Link>
      <div className="attrs">
        {reactJoin(authors.map((a) => <Link to={a.slug}>{a.name}</Link>), ', ')}
        <TagList tags={tags || []} />
      </div>
    </li>
  );
};

const BlogPage = ({ data: { allBlog: { edges } } }) => {
  if (!edges) {
    return <Layout />;
  }
  return (
    <Layout>
      <div className="container">
        <div id="block-block-15" className="block block-block even blog-posts">
          <h3 className="title">Recent Blog Posts</h3>
        </div>
        <div className="content blog-posts">
          <div className="item-list">
            <ul className="ji-blog-list ji-item-list">
              {edges.map(({ node: post }) => <Post key={post.id} {...post} />)}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allBlog(limit: 1000) {
      edges {
        node {
          date
          id
          slug
          strippedHtml
          title
          tags
          authors {
            ...AuthorFragment
          }
        }
      }
    }
  }
`;
