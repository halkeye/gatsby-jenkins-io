/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const AuthorFragment = graphql`
  fragment AuthorFragment on Author {
    avatar {
      childImageSharp {
        gatsbyImageData(width: 128)
      }
    }
    blog
    github
    html
    id
    irc
    linkedin
    name
    slug
    twitter
  }
`;
