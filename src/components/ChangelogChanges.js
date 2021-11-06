import * as React from 'react';
import { reactJoin } from '../utils';

const ChangelogReferences = ({references}) => {
  if (!references) {return null;}
  return (<>
    {`(`}
    {reactJoin(references.map((reference, idx) => (<ChangelogReference key={idx} {...reference} />)), ', ')}
    {`)`}
  </>);
};

const JiraIssueLink = ({issue}) => (<a href={`https://issues.jenkins.io/browse/JENKINS-${issue}`}>{`issue ${issue}`}</a>)
const GithubPullLink = ({id}) => (<a href={`https://github.com/jenkinsci/jenkins/pull/${id}`}>{`pull ${id}`}</a>)

const ChangelogReference = ({issue, pull, url, title}) => {
  if (issue) {return <JiraIssueLink issue={issue} />}
  if (pull) {return <GithubPullLink id={pull} />}
  return (<a href={url}>{title || url}</a>)
};

const ChangelogChanges = ({changes}) => {
  if (!changes) {
    return (<em>No notable changes in this release.</em>);
  }
  return changes.map((change, idx) => (
    <li className={change.type} key={idx}>
      <span dangerouslySetInnerHTML={{__html: change.message}} />
      {` `}
      {change.references && <ChangelogReferences references={change.references} />}
      {!change.references && change.issues && <ChangelogReferences references={[{issue: change.issue}]} />}
      {!change.references && change.pull && <ChangelogReferences references={[{pull: change.pull}]} />}
    </li>
  ))
};
ChangelogChanges.displayName = 'ChangelogChanges';

export default ChangelogChanges
