import * as React from 'react';
import { Link } from 'gatsby';

import TagList from './TagList';
import Pagination from './Pagination';

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
        {reactJoin(authors.map((a) => <Link key={a.slug} to={a.slug}>{a.name}</Link>), ', ')}
        <TagList tags={tags || []} />
      </div>
    </li>
  );
};

const BlogPosts = ({ pageContext, data: { allBlog: { edges } } }) => {
  if (!edges) {
    return null;
  }
  return (
    <>
      <div className="content blog-posts">
        <div className="item-list">
          <ul className="ji-blog-list ji-item-list">
            {edges.map(({ node: post }) => <Post key={post.id} {...post} />)}
          </ul>
        </div>
      </div>
      <Pagination prefix="/blog" currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
    </>
  );
};

export default BlogPosts;
