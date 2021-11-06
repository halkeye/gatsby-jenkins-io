import * as React from 'react';
import { graphql, Link } from 'gatsby';
import ChangelogLayout from '../layout/ChangelogLayout';
import Seo from '../components/seo';

// Source https://github.com/jenkins-infra/jenkins.io/blob/master/content/_data/changelogs/weekly.yml
const ChangelogPage = ({ data }) => {
  return (
    <ChangelogLayout title="Changelog" showRatings hasRSS releases={data.allWeeklyYaml.edges}>
      <Seo title="Changelog" />
      <p>
        <b>
          Changelogs of historical releases can be found
          <Link to="/changelog-old/">in the changelog archive.</Link>
        </b>
      </p>
    </ChangelogLayout>
  );
}
ChangelogPage.displayName = 'ChangelogPage';


export default ChangelogPage;
export const pageQuery = graphql`
query ChangelogPageQuery {
  allWeeklyYaml(limit: 30, sort: {order: DESC, fields: machineVersion}) {
    edges {
      node {
        banner
        changes {
          message
          pull
          type
          references {
            issue
            pull
            title
            url
          }
        }
        date
        id
        version
      }
    }
  }
}
`;
