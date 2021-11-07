import * as React from 'react';
import { graphql, Link } from 'gatsby';
import ChangelogLayout from '../layout/ChangelogLayout';
import Seo from '../components/seo';

// Source: https://github.com/jenkins-infra/jenkins.io/blob/master/content/_data/changelogs/lts.yml
const ChangelogStablePage = ({ data }) => {
  return (
    <ChangelogLayout title="LTS Changelog" showRatings hasRSS releases={data.allLtsYaml.edges} prependChildren>
      <Seo title="LTS Changelog" />
      <div style={{margin: '10px', padding: '10px', backgroundColor: '#FFFFCE'}}>
        See the <Link to='/doc/upgrade-guide/'>LTS upgrade guide</Link> for advice on upgrading Jenkins.
      </div>
    </ChangelogLayout>
  );
}
ChangelogStablePage.displayName = 'ChangelogStablePage';


export default ChangelogStablePage;
export const pageQuery = graphql`
query ChangelogStablePageQuery {
  allLtsYaml(sort: {order: DESC, fields: machineVersion}) {
    edges {
      node {
        banner
        lts_changes {
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
        lts_baseline
        lts_predecessor
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

