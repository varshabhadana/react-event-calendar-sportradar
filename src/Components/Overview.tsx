import { DateTime, Info } from 'luxon';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eventData from '../mockData.json';
import AddEventModal from './AddEventModal';

const Overview = () => {
  const [allEvents, setAllEvents] = useState<Array<any>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const response = eventData.data;

    setAllEvents(response);
  }, []);

  const formattedDate = (date: string, format: string) => {
    return DateTime.fromFormat(date, format, { zone: 'utc' })
      .toLocal()
      .toFormat('dd.MM.yyyy ');
  };

  return (
    <div className="bg-slate-200 h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center items-center flex-col p-5">
        {' '}
        {allEvents.map((el) => (
          <div
            key={el}
            className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg w-full mb-2 "
          >
            <Link to={`/details/${el.id}`}>
              <div className="flex justify-between items-center text-blue-800 p-6 ">
                <div>
                  {
                    Info.weekdays('short', { locale: 'en-EN' })[
                      new Date(el.dateVenue).getDay()
                    ]
                  }
                </div>

                <div> {formattedDate(el.dateVenue, 'yyyy-MM-dd')}</div>

                <div className="ml-3 mr-5 h-5 w-5 ">
                  {' '}
                  {el.timeVenueUTC.slice(0, 5)}
                </div>

                <div> {`${el.homeTeam?.name} - ${el.awayTeam.name}`}</div>
              </div>
            </Link>
          </div>
        ))}
        <button
          className="text-lg font-medium text-white dark:text-gray-300 w-5/12 h-22 text-white dark:text-blue-500  rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 mt-3 "
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
    </div>
  );
};

export default Overview;
