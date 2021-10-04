import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const Avatar = ({ name, avatar }) => (
  <div>
    {avatar?.childImageSharp && <GatsbyImage image={getImage(avatar)} alt={name} />}
    {!avatar?.childImageSharp && <StaticImage src="../../content/images/logos/transparent/transparent.svg" alt={name} width={128} />}
  </div>
);
Avatar.displayName = 'Avatar';

export default Avatar;
