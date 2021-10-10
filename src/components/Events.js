import * as React from 'react';
import { DAYS_OF_WEEK, SHORT_MONTH_NAMES } from '../utils';
import LinkWrapper from './LinkWrapper';

const Event = ({
  date, endDate, html, link, location, title,
}) => {
  const eventTime = new Date(date);
  const endTime = endDate ? new Date(endDate) : null;
  /* FIXME - next unless (endDate != nil ? event.endDate : event_time) > now */
  return (
    <li className="post event">
      <LinkWrapper className="body" to={link} rel="noreferrer noopener" target="_blank">
        <div className="header time">
          <div className="date-time">
            <div className="date">
              <div className="month">
                {SHORT_MONTH_NAMES[eventTime.getUTCMonth()]}
              </div>
              <div className="day">
                {eventTime.getUTCDate().toString().padStart(2, '0')}
              </div>
              {endTime !== null && (
              <>
                -
                <div className="month">
                  {SHORT_MONTH_NAMES[eventTime.getUTCMonth()]}
                </div>
                <div className="day">
                  {eventTime.getUTCDate().toString().padStart(2, '0')}
                </div>
              </>
              )}
              <div className="dow">
                {DAYS_OF_WEEK[eventTime.getUTCDay()]}
              </div>
            </div>
            <div className="time">
              {`${(eventTime.getUTCHours() + 1).toString().padStart(2, '0')}: ${(eventTime.getUTCMinutes() + 1).toString().padStart(2, '0')} ${eventTime.getUTCHours() + 1 <= 12 ? 'AM' : 'PM'}`}
            </div>
          </div>
          <h5 className="title">{title}</h5>
          {location}
        </div>
        <div className="teaser">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="more" />
        </div>
      </LinkWrapper>
      <div className="attrs" />
    </li>
  );
};
Event.displayName = 'Event';

const Events = ({ events }) => (
  <div className="item-list">
    <ul className="ji-date-list ji-item-list">
      {events.map(({ node: event }) => <Event key={event.id} {...event} />)}
    </ul>
  </div>
);
Events.displayName = 'Events';
export default Events;
