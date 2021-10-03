import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Avatar from '../components/Avatar';
import SocialMediaButtons from '../components/SocialMediaButtons';
import TagList from '../components/TagList';
import TwitterShareButton from '../components/TwitterShareButton';
import { reactJoin } from '../utils';

const Author = ({
  name,
  html,
  blogroll,
  slug,
  avatar,
  twitter,
  github,
  linkedin,
  blog,
}) => (
  <div>
    {!blogroll && (<h2>{name}</h2>)}
    <table className="author box">
      <tbody>
        <tr>
          <td style={{ width: avatar?.childImageSharp?.gatsbyImageData?.width || 128 }}>
            <Avatar avatar={avatar} name={name} />
          </td>
          <td>
            {!blogroll && (
            <b className="author name">
              <Link to={slug}>
                {name}
              </Link>
            </b>
            )}
            {html && (<p dangerouslySetInnerHTML={{ __html: html }} />)}
            {!html && (
            <p>
              {`This author has no biography defined.
            See social media links referenced below.`}
            </p>
            )}
            <SocialMediaButtons twitter={twitter} github={github} linkedin={linkedin} blog={blog} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Authors = ({ authors, blogroll }) => (
  <div id="about-the-author">
    <b className="author about-header">
      About the Author
      {authors.length > 1 ? 's' : ''}
    </b>
    {authors.map((author) => <Author key={author.id} blogroll={blogroll} {...author} />)}
  </div>
);

const Post = ({ data }) => {
  const {
    title, date, authors, html, tags, slug,
  } = data.blog;
  return (
    <Layout>
      <div className="container blog-post">
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
                    {reactJoin(authors.map((a) => <Link to={a.slug}>{a.name}</Link>), ', ')}
                  </span>
                  <TagList tags={tags || []} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Authors authors={authors} blogroll />
              </div>
              TODO-partial(&apos;discuss.html&apos;)
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($id: String!) {
    blog(id: { eq: $id }) {
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
`;
