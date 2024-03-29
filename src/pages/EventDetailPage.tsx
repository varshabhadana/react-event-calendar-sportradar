import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEventStore } from '../state/events';

function EventDetailPage() {
  const [singleEventDetails, setSingleEventDetails] = useState<any>();
  const { id } = useParams();
  const allEvents = useEventStore((state: any) => state.events);
  const navigate = useNavigate();

  useEffect(() => {
    const singleEvent = allEvents.find((el: any) => el.id === id);

    setSingleEventDetails(singleEvent);
  }, [id]);

  return (
    <div className="bg-slate-200 h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full">
      <div className="overflow-hidden bg-white drop-shadow-lg sm:rounded-lg w-6/12 h-auto p-5 text-lg font-mediumleading-6 text-gray-900 ">
        {singleEventDetails && (
          <div>
            <div className="flex justify-between px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold leading-6 text-gray-900">
                Event Details
              </h3>
              <button
                onClick={() => navigate('/')}
                className="w-2/12 h-full p-1 flex border-2 border-indigo justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                Go Back
              </button>
            </div>
            <div className="flex  p-1  mt-4">
              <div>Season : {singleEventDetails.season} </div>
              <div className="ml-20">Status: {singleEventDetails.status}</div>
            </div>
            <div className="flex p-1 mb-4">
              {' '}
              <div>Time: {singleEventDetails.timeVenueUTC}</div>
              <div className="ml-20">Date: {singleEventDetails.dateVenue}</div>
            </div>

            <div>
              <h1 className="text-xl">Home team</h1>

              <div className="flex flex-col ml-3 p-1 mb-4 ">
                <div>Name: {singleEventDetails.homeTeam?.name}</div>
                <div>
                  Official Name: {singleEventDetails.homeTeam?.officialName}
                </div>
                <div>
                  Abbreviation: {singleEventDetails.homeTeam?.abbreviation}
                </div>
                <div>Slug: {singleEventDetails.homeTeam?.slug}</div>
                <div>
                  Team Country Code:{' '}
                  {singleEventDetails.homeTeam?.teamCountryCode}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Away team</h1>
              <div className="flex flex-col ml-3 p-1 mb-4 ">
                <div>Name: {singleEventDetails.awayTeam.name}</div>
                <div>
                  Abbreviation: {singleEventDetails.awayTeam.abbreviation}
                </div>
                <div>
                  Official Name: {singleEventDetails.awayTeam.officialName}
                </div>
                <div>Slug: {singleEventDetails.awayTeam.slug}</div>
                <div>
                  Team Country Code:{' '}
                  {singleEventDetails.awayTeam.teamCountryCode}
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Result</h1>
              <div className="flex flex-col ml-3 p-1 mb-4 ">
                {' '}
                <div>Home Goals:{singleEventDetails.result.homeGoals}</div>
                <div>Away Goals:{singleEventDetails.result.awayGoals}</div>
                <div>Winner :{singleEventDetails.result.winner}</div>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Stage</h1>
              <div className="flex flex-col ml-3 p-1 mb-4 ">
                <div>Id: {singleEventDetails.stage.id}</div>
                <div>Name: {singleEventDetails.stage.name}</div>
                <div>Ordering : {singleEventDetails.stage.ordering}</div>
              </div>
            </div>
            <div>
              <div>
                Origin Competition Id: {singleEventDetails.originCompetitionId}
              </div>
              <div>
                Origin Competition Name:{' '}
                {singleEventDetails.originCompetitionName}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetailPage;
