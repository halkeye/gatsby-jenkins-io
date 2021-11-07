import * as React from 'react';
import { graphql, Link } from 'gatsby';
import ChangelogLayout from '../layout/ChangelogLayout';
import Seo from '../components/seo';

// Source https://github.com/jenkins-infra/jenkins.io/blob/master/content/_data/changelogs/weekly.yml
const ChangelogOldPage = ({ data }) => {
  return (
    <ChangelogLayout title="Changelog Archive" showRatings={false} hasRSS={false} releases={data.allWeeklyYaml.edges} prependChildren>
      <Seo title="Changelog Archive" />
      <div style={{margin: '10px', padding: '10px', backgroundColor: '#FFFFCE'}}>
        <b>This is the changelog archive.  Recent changelogs can be found <Link to={'/changelog/'}>here</Link>.</b>
      </div>
    </ChangelogLayout>
  );
}
ChangelogOldPage.displayName = 'ChangelogOldPage';


export default ChangelogOldPage;
export const pageQuery = graphql`
query ChangelogOldPageQuery {
  allWeeklyYaml(skip: 30, sort: {order: DESC, fields: machineVersion}) {
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

