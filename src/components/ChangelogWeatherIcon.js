import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const ChangelogWeatherIcon = ({mode, ...props}) => {
  const data = useStaticQuery(graphql`
    query ChangelogWeatherIconQuery {
      sunny: file(relativePath: {eq: "images/changelog/sunny.svg"}) { publicURL }
      cloudy: file(relativePath: {eq: "images/changelog/cloudy.svg"}) { publicURL }
      storm: file(relativePath: {eq: "images/changelog/storm.svg"}) { publicURL }
    }
  `)
  return <img src={data[mode].publicURL} {...props} />;
}
ChangelogWeatherIcon.displayName = 'ChangelogWeatherIcon'

export default ChangelogWeatherIcon;
