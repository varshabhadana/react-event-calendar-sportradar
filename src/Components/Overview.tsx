import { DateTime, Info } from 'luxon';
import React, { useEffect, useState } from 'react';
import eventData from '../mockData.json';
import AddEventModal from './AddEventModal';

const Overview = () => {
  const [allEvents, setAllEvents] = useState<Array<any>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    <div className="bg-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      {allEvents.map((el) => (
        <div key={el}>
          <div className="overflow-hidden bg-blue drop-shadow-2xl sm:rounded-lg w-full max-w-lg space-y-8 flex justify-between items-center text-blue-800 p-5 ">
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
      <button
        className="text-lg font-medium text-white dark:text-gray-300 w-5/12 h-22 text-blue-700 dark:text-blue-500  rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 mt-3"
        onClick={() => setOpenModal(true)}
      >
        Add Event
      </button>
      <AddEventModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        allEvents={allEvents}
        setAllEvents={setAllEvents}
      />
    </div>
  );
};

export default Overview;
