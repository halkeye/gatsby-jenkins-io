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
  fragment EventFragment on Event {
    id
    date
    endDate
    external
    html
    link
    location
    title
  }
  fragment BlogFragment on Blog {
    html
    id
    title
    date
    slug
    links {
      discourse
    }
    authors {
      ...AuthorFragment
    }
  }
  fragment BlogListFragment on Blog {
    date
    id
    slug
    strippedHtml
    title
    tags
    authors {
      ...AuthorFragment
    }
  }
`;
