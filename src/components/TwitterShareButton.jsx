import React from 'react';
import { withPrefix, graphql, useStaticQuery } from 'gatsby';

const TwitterShareButton = ({ title, path }) => {
  const { site: { siteMetadata: { siteUrl } } } = useStaticQuery(graphql`query { site { siteMetadata { siteUrl } } }`);

  const url = new URL(siteUrl);
  url.pathname = withPrefix(path);
  return (
    <a
      className="twitter-share-button"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&amp;url=${encodeURIComponent(url.toString())}`}
      data-lang="en"
      rel="noreferrer nofollow"
      target="_blank"
    >
      Tweet
    </a>
  );
};
export default TwitterShareButton;
