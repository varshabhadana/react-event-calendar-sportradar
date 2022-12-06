import { DateTime, Info } from 'luxon';
import React, { useEffect, useState } from 'react';
import eventData from '../mockData.json';

const Overview = () => {
  const [allEvents, setAllEvents] = useState<Array<any>>([]);
  useEffect(() => {
    const response = eventData.data;
    console.log(response);
    setAllEvents(response);
  }, []);

  const formattedDate = (date: string, format: string) => {
    return DateTime.fromFormat(date, format, { zone: 'utc' })
      .toLocal()
      .toFormat('dd.MM.yyyy ');
  };

  return (
    <div>
      {allEvents.map((el) => (
        <div key={el}>
          <p className="bg-red">
            {
              Info.weekdays('short', { locale: 'en-EN' })[
                new Date(el.dateVenue).getDay()
              ]
            }
            <br />
            {formattedDate(el.dateVenue, 'yyyy-MM-dd')}
            <br />
            {el.timeVenueUTC.slice(1, 5)}
            <br />
            <span>Football</span>
            <br />
            {`${el.homeTeam?.name}-${el.awayTeam.name}`}
          </p>
        </div>
      ))}
      <button>Add Event</button>
    </div>
  );
};

export default Overview;
