import * as React from 'react';
import SimplePageLayout from './SimplePageLayout';
import fetchJsonp from 'fetch-jsonp';
import ChangelogRatings from '../components/ChangelogRatings'
import ChangelogChanges from '../components/ChangelogChanges'

import '../../content/css/changelog.css';

const ChangelogLayout = ({children, showRatings, releases, ...props}) => {
  const [ratings, setRatings] = React.useState({})
  const [ratingLastNeedTime, setRatingsNeedRefresh] = React.useState(0)
  if (showRatings) {
    React.useEffect(() => fetchJsonp('https://rating.jenkins.io/rate/result.php').then(r => r.json()).then(r => setRatings(r)), [ratingLastNeedTime]);
  }
  return (
    <SimplePageLayout {...props}>
      <div className='w-100 text-right'>
        <div className='iconlegend'>
          Legend:
          <ul className='image'>
            <li className='security'>security fix</li>
            <li className='major bug'>major bug fix</li>
            <li className='bug'>bug fix</li>
            <li className='major rfe'>major enhancement</li>
            <li className='rfe'>enhancement</li>
          </ul>
        </div>
      </div>
      <div className='w-100 text-right' style={{margin: '10px 0'}}>
        <div className='iconlegend'>
          Community feedback:
          <ul className='feedback'>
            <li className='sunny'>no major issues</li>
            <li className='cloudy'>notable issues</li>
            <li className='storm'>required rollback</li>
          </ul>
        </div>
      </div>
      <div className="ratings">
        {releases.map(({node: release}) => {
          return (
            <div key={release.id}>
              <h3 id={`v${release.version}`}>
                What's new in {release.version}
                {release.date && ` (${new Date(release.date).toLocaleDateString()})`}
              </h3>
              {showRatings && <ChangelogRatings ratings={ratings[release.version]} version={release.version} setRatingsNeedRefresh={setRatingsNeedRefresh} />}
              {release.banner && <div
                style={{margin: '10px', padding: '10px', backgroundColor: '#FFFFCE'}}
                dangerouslySetInnerHTML={{__html: release.banner}}
              />}
              <ul className="image">
                <ChangelogChanges changes={release.changes} />
              </ul>
            </div>
          )
        })}
      </div>
      {children}
    </SimplePageLayout>
  )
};

ChangelogLayout.displayName = 'ChangelogLayout';
export default ChangelogLayout;