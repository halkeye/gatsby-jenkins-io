import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import classNames from 'classnames';

const ChangelogWeatherIcon = ({mode, count, ...props}) => {
  const data = useStaticQuery(graphql`
    query ChangelogWeatherIconQuery {
      sunny: file(relativePath: {eq: "changelog/sunny.svg"}) { publicURL }
      cloudy: file(relativePath: {eq: "changelog/cloudy.svg"}) { publicURL }
      storm: file(relativePath: {eq: "changelog/storm.svg"}) { publicURL }
    }
  `)
  const titles = {
    sunny: 'No major issues with this release',
    cloudy: 'I experienced notable issues',
    storm: 'I had to roll back',
  };
  return <>{count} <img src={data[mode]?.publicURL} title={titles[mode]} alt={mode} className={classNames('rate', {light: !count})} {...props} /></>;
}
ChangelogWeatherIcon.displayName = 'ChangelogWeatherIcon'

export default ChangelogWeatherIcon;
