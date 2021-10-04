import * as React from 'react';
import { Link } from 'gatsby';
import Avatar from './Avatar';
import SocialMediaButtons from './SocialMediaButtons';

const AuthorBio = ({ html }) => {
  if (!html) {
    return (
      <p>
        {`This author has no biography defined.
            See social media links referenced below.`}
      </p>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
AuthorBio.displayName = 'AuthorBio';

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
            {blogroll && (
            <b className="author name">
              <Link to={slug}>
                {name}
              </Link>
            </b>
            )}
            <AuthorBio html={html} />
            <SocialMediaButtons twitter={twitter} github={github} linkedin={linkedin} blog={blog} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
Author.displayName = 'Author';

export default Author;
