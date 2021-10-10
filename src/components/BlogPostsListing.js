import * as React from 'react';
import { Link } from 'gatsby';

import TagList from './TagList';
import Pagination from './Pagination';
import AuthorList from './AuthorList';

import { SHORT_MONTH_NAMES } from '../utils';

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
        <AuthorList authors={authors} />
        <TagList tags={tags || []} />
      </div>
    </li>
  );
};
Post.displayName = 'Post';

const BlogPosts = ({ prefix, pageContext, blogs }) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }
  return (
    <>
      <div className="content blog-posts">
        <div className="item-list">
          <ul className="ji-blog-list ji-item-list">
            {blogs.map(({ node: post }) => <Post key={post.id} {...post} />)}
          </ul>
        </div>
      </div>
      {pageContext && <Pagination prefix={prefix} currentPage={pageContext.currentPage} numPages={pageContext.numPages} />}
    </>
  );
};
BlogPosts.displayName = 'BlogPosts';

export default BlogPosts;
