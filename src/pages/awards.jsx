import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SimplePageLayout from '../layout/SimplePageLayout';
import Seo from '../components/seo';

const AwardPage = ({ data }) => (
  <SimplePageLayout title="Award">
    <Seo title="Award" />
    {data.allAwardsYaml.edges.map(({ node: award }) => (
      <div key={award.id}>
        {award?.image?.childImageSharp && <GatsbyImage image={getImage(award.image)} style={{ float: 'right', margin: '5px' }} alt="Award" /> }
        {!award?.image?.childImageSharp && award?.image?.publicURL && <img src={award.image.publicURL} style={{ float: 'right', margin: '5px' }} alt="Award" />}
        <h2>
          {award.url && <a href={award.url}>{award.title}</a>}
          {!award.url && award.title}
        </h2>
        {award.description && <p>{award.description}</p>}
        {award.quote && <blockquote>{award.quote}</blockquote>}
      </div>
    ))}
  </SimplePageLayout>
);
AwardPage.displayName = 'AwardPage';

export default AwardPage;
export const pageQuery = graphql`
query AwardPageQuery {
  allAwardsYaml(sort: {order: DESC, fields: year}) {
    edges {
      node {
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 150
              layout: CONSTRAINED
            )
          }
        }
        id
        url
        title
        description
        quote
      }
    }
  }
}`;
