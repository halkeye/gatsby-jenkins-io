import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'March', 'April', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
];

const Post = ({ slug, date, title }) => {
  const dateObj = new Date(date);
  return (
    <li className="post">
      <Link to={slug}>
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
          TODO -- excerpt of html
        </p>
        <span className="more" />
      </Link>
      <div className="attrs">
        TODO - authorsfor
        <ul>
          <li>
            tag
          </li>
        </ul>
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
          html
          id
          title
          date
          slug
          authors {
            ...AuthorFragment
          }
        }
      }
    }
  }
`;
