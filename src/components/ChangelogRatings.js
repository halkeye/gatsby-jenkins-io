import * as React from 'react';
import ChangelogWeatherIcon from '../components/ChangelogWeatherIcon'
import classNames from 'classnames';

const ChangelogRatings = ({version, ratings, setRatingsNeedRefresh}) => {
  if (!ratings) {
    return null;
  }
  const rate = async (rating) => {
    let issue;
    if (rating <= 0) {
      issue = prompt('Please provide issue number from our JIRA causing trouble:', '')
      if (issue === null) {
        return; // Cancelled
      }
      if (!issue) {
        issue = prompt('Are you sure you do not want to provide an issue reference? It really helps us improve Jenkins.\nEnter issue number, or leave empty to skip:', '');
      }
      if (issue === null) {
        return; // Cancelled
      }
    }
    await fetch('https://rating.jenkins.io/rate/submit.php', {
      query: {
        version: version,
        rating: rating,
        issue: issue,
      },
    });
    alert('Thanks!');
    setRatingsNeedRefresh(new Date().getTime())
  }
  const [good, nolike, rollback] = ratings;
  const issues = {};
  for (let i = 3; i < ratings.length; i += 2) {
    issues[ratings[i]] = ratings[i + 1];
  }
  return (
    <div className="rate-outer">
      <div className="rate-offset">
        {good} <ChangelogWeatherIcon mode='sunny' onClick={() => rate(1)} className={classNames('rate', {light: !good})} alt="sunny" title="No major issues with this release" />
        {nolike} <ChangelogWeatherIcon mode='cloudy' onClick={() => rate(0)} className={classNames('rate', {light: !nolike})} alt="cloudy" title="I experienced notable issues" />
        {rollback} <ChangelogWeatherIcon mode='storm' onClick={() => rate(-1)} className={classNames('rate', {light: !rollback})} alt="storm" title="I had to roll back" />
        {Object.keys(issues).length > 0 && (
          <span className="related-issues">
            Community reported issues: {Object.entries(issues).map(([id, count]) => (<span key={id}>{`${count}×`}<a href={`https://issues.jenkins.io/browse/JENKINS-${id}`}>JENKINS-{id}</a>{' '}</span>))}
          </span>
        )}
      </div>
    </div>
  );
}
ChangelogRatings.displayName = 'ChangelogRatings';

export default ChangelogRatings;
