import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import eventData from '../mockData.json';

function EventDetailPage() {
  const [singleEventDetails, setSingleEventDetails] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    const response = eventData.data;

    const singleEvent = response.find((el) => {
      return el.id === id;
    });
    console.log(singleEvent);
    setSingleEventDetails(singleEvent);
  }, [id]);

  return (
    <>
      <div>
        {singleEventDetails && (
          <>
            <div>Season: {singleEventDetails.season}</div>
            <div>Status: {singleEventDetails.status}</div>
            <div>Time: {singleEventDetails.timeVenueUTC}</div>
            <div>Date: {singleEventDetails.dateVenue}</div>
            <div>
              <h1 className="text-xl">Home team</h1>
              <div>Name: {singleEventDetails.homeTeam?.name}</div>
              <div>
                Abbreviation: {singleEventDetails.homeTeam.abbreviation}
              </div>
              <div>
                Official Name: {singleEventDetails.homeTeam.officialName}
              </div>
              <div>Slug: {singleEventDetails.homeTeam.slug}</div>
              <div>
                Team Country Code: {singleEventDetails.homeTeam.teamCountryCode}
              </div>
            </div>
            <div>
              <h1 className="text-xl">Away team</h1>
              <div>Name: {singleEventDetails.awayTeam.name}</div>
              <div>
                Abbreviation: {singleEventDetails.awayTeam.abbreviation}
              </div>
              <div>
                Official Name: {singleEventDetails.awayTeam.officialName}
              </div>
              <div>Slug: {singleEventDetails.awayTeam.slug}</div>
              <div>
                Team Country Code: {singleEventDetails.awayTeam.teamCountryCode}
              </div>
            </div>
            <div>
              <h1 className="text-xl">Result</h1>
              <div>Home Goals:{singleEventDetails.result.homeGoals}</div>
              <div>Away Goals:{singleEventDetails.result.awayGoals}</div>
              <div>Winner :{singleEventDetails.result.winner}</div>
            </div>
            <div>
              <h1 className="text-xl">Stage</h1>
              <div>Id: {singleEventDetails.stage.id}</div>
              <div>Name: {singleEventDetails.stage.name}</div>
              <div>Ordering : {singleEventDetails.stage.ordering}</div>
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
          </>
        )}
      </div>
    </>
  );
}

export default EventDetailPage;
