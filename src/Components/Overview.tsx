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
          <div className="grid grid-cols-5 p-3">
            <div>
              {
                Info.weekdays('short', { locale: 'en-EN' })[
                  new Date(el.dateVenue).getDay()
                ]
              }
            </div>

            <div> {formattedDate(el.dateVenue, 'yyyy-MM-dd')}</div>

            <div> {el.timeVenueUTC.slice(1, 5)}</div>

            <div>Football</div>

            <div> {`${el.homeTeam?.name} - ${el.awayTeam.name}`}</div>
          </div>
        </div>
      ))}
      <button className="border-2">Add Event</button>
    </div>
  );
};

export default Overview;
