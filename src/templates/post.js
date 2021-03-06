import * as React from 'react';
import { graphql, Link } from 'gatsby';

import SimplePageLayout from '../layout/SimplePageLayout';
import TagList from '../components/TagList';
import TwitterShareButton from '../components/TwitterShareButton';
import Discourse from '../components/Discourse';
import Author from '../components/Author';
import AuthorList from '../components/AuthorList';

const Authors = ({ authors, blogroll }) => (
  <div id="about-the-author">
    <b className="author about-header">
      About the Author
      {authors.length > 1 ? 's' : ''}
    </b>
    {authors.map((author) => <Author key={author.id} blogroll={blogroll} {...author} />)}
  </div>
);
Authors.displayName = 'Author';

const Post = ({ data, pageContext }) => {
  const {
    title, date, authors, html, tags, slug, links,
  } = data.blog;
  return (
    <SimplePageLayout>
      <div className="container blog-post">
        <div className="row">
          <div className="col"><Link to={pageContext.previous}>Prev</Link></div>
          <div className="col text-right"><Link to={pageContext.next}>Next</Link></div>
        </div>
        <div className="row body">
          <div id="content" className="col-md-11 col-md-offset-1 main-content">
            <div className="content-top">
              <h1>
                <Link to={slug} title={title}>{title}</Link>
              </h1>
              <div style={{ float: 'right', clear: 'all' }}>
                <TwitterShareButton title={title} path={slug} />
                <div className="post-attrs">
                  <span className="submitted">
                    Published on
                    {' '}
                    {new Date(date).toLocaleDateString()}
                    {' '}
                    by
                    {' '}
                    <AuthorList authors={authors} />
                  </span>
                  <TagList tags={tags || []} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Authors authors={authors} blogroll />
              </div>
              <Discourse topicId={links.discourse} />
            </div>
          </div>
        </div>
      </div>
    </SimplePageLayout>
  );
};
Post.displayName = 'Post';

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    blog(id: { eq: $id }) {
      ...BlogFragment
    }
  }
`;
