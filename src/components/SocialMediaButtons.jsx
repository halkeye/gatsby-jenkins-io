import React from 'react';

const SocialMediaButtons = ({
  github, twitter, blog, linkedin,
}) => (
  <ul className="author social-media-buttons">
    {github && (<li className="author"><a href={`https://github.com/${github}`} target="_blank" rel="noreferrer noopener">Github</a></li>)}
    {twitter && (<li className="author"><a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer noopener">Twitter</a></li>)}
    {blog && (<li className="author"><a href={blog} target="_blank" rel="noreferrer noopener">Blog</a></li>)}
    {linkedin && (<li className="author"><a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer noopener">LinkedIn</a></li>)}
  </ul>
);

export default SocialMediaButtons;
