import { Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

type Props = {
  openModal: boolean;
  setOpenModal: any;
  allEvents: any[];
  setAllEvents: any;
};
type FormValues = {
  season: number;
  status: string;
  dateVenue: string;
  timeVenueUTC: string;

  stadium: string | null;
  homeTeam: {
    name: string;
    officialName: string;
    slug: string;
    abbreviation: string;
    teamCountryCode: string;
    stagePosition: string | null;
  };
  awayTeam: {
    name: string;
    officialName: string;
    slug: string;
    abbreviation: string;
    teamCountryCode: string;
    stagePosition: string | null;
  };
  result: {
    homeGoals: number;
    awayGoals: number;
    winner: string | null;
    winnerId: string | null;
    message: string | null;
    goals: number[];
    yellowCards: number[] | undefined;
    secondYellowCards: number[] | undefined;
    directRedCards: number[] | undefined;
    scoreByPeriods: object | undefined;
  };
  stage: {
    id: string;
    name: string;
    ordering: number;
  };
  group: string | null;
  originCompetitionId: string;
  originCompetitionName: string;
};

const initialFormValues = {
  season: 0,
  status: '',
  dateVenue: '',
  timeVenueUTC: '',

  stadium: '',
  homeTeam: {
    name: '',
    officialName: '',
    slug: '',
    abbreviation: '',
    teamCountryCode: '',
    stagePosition: '',
  },
  awayTeam: {
    name: '',
    officialName: '',
    slug: '',
    abbreviation: '',
    teamCountryCode: '',
    stagePosition: '',
  },
  result: {
    homeGoals: 0,
    awayGoals: 0,
    winner: '',
    winnerId: '',
    message: '',
    goals: [],
    yellowCards: [],
    secondYellowCards: [],
    directRedCards: [],
    scoreByPeriods: {
      firstHalf: {
        home: 0,
        away: 0,
      },
      secondHalf: {
        home: null,
        away: null,
      },
      thirdHalf: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
      extraTime: {
        home: null,
        away: null,
      },
    },
  },
  stage: {
    id: '',
    name: '',
    ordering: 0,
  },
  group: '',
  originCompetitionId: '',
  originCompetitionName: '',
};
export default function AddEventModal(props: Props) {
  const [form, setFormValues] = useState<FormValues>(initialFormValues);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }
  // Handle change for Home team object
  function homeTeamHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      homeTeam: {
        ...form.homeTeam,
        [event.currentTarget.id]: event.currentTarget.value,
      },
    });
  }
  // Handle change for Away team object
  function awayTeamHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      awayTeam: {
        ...form.awayTeam,
        [event.currentTarget.id]: event.currentTarget.value,
      },
    });
  }
  // Handle change for Result
  function resultHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      result: {
        ...form.result,
        [event.currentTarget.id]: event.currentTarget.value,
      },
    });
  }
  // Handle change for Stage
  function stageHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      stage: {
        ...form.stage,
        [event.currentTarget.id]: event.currentTarget.value,
      },
    });
  }
  // To add New Event
  async function addNewEventHandler() {
    props.setAllEvents([...props.allEvents, form]);
    setFormValues(initialFormValues);
    props.setOpenModal(false);
  }
  return (
    <div className="h-screen">
      <Modal
        show={props.openModal}
        size="3xl"
        popup={true}
        onClose={() => {
          props.setOpenModal(false);
        }}
      >
        <Modal.Header />
        <Modal.Body
          style={{ height: '700px', overflow: 'auto', width: '700px' }}
        >
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white p-2">
              Create your own Event
            </h3>
            <div className="mb-2 block p-2">
              <Label htmlFor="season" value="Season" />
            </div>
            <TextInput
              id="season"
              required={true}
              value={form.season}
              onChange={handleChange}
            />
            <div className="mb-2 block p-2">
              <Label htmlFor="status" value="Status" />
            </div>
            <TextInput
              id="status"
              required={true}
              value={form.status}
              onChange={handleChange}
            />{' '}
            <div className="mb-2 block p-2">
              <Label htmlFor="date" value=" Date" />
              <TextInput
                id="dateVenue"
                type={'date'}
                value={form.dateVenue}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 block p-2">
              <Label htmlFor="time" value="Time" />
              <TextInput
                id="timeVenueUTC"
                type={'time'}
                value={form.timeVenueUTC}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="p-2">
              <div className="mb-2 block">
                <Label htmlFor="stadium" value="Stadium" />
              </div>
              <TextInput
                id="stadium"
                required={false}
                value={form.stadium || ''}
                onChange={handleChange}
              />
            </div>
            {/*  // Home Team Details */}
            <div className="mt-4 border-2 p-4 mb-4 flex flex-col justify-center ">
              <Label htmlFor="homeTeam" value="Home Team" />
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Name" />
                  </div>
                  <TextInput
                    id="name"
                    required={true}
                    value={form.homeTeam.name}
                    onChange={homeTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Official Name" />
                  </div>
                  <TextInput
                    id="officialName"
                    required={true}
                    value={form.homeTeam.officialName}
                    onChange={homeTeamHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Slug" />
                  </div>
                  <TextInput
                    id="slug"
                    required={true}
                    value={form.homeTeam.slug}
                    onChange={homeTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Abbreviation" />
                  </div>
                  <TextInput
                    id="abbreviation"
                    required={true}
                    value={form.homeTeam.abbreviation}
                    onChange={homeTeamHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Team Country Code" />
                  </div>
                  <TextInput
                    id="teamCountryCode"
                    required={true}
                    value={form.homeTeam.teamCountryCode}
                    onChange={homeTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeTeam" value="Stage Position" />
                  </div>
                  <TextInput
                    id="stagePosition"
                    required={false}
                    value={form.homeTeam.stagePosition || ''}
                    onChange={homeTeamHandleChange}
                  />
                </div>
              </div>
            </div>
            {/*  // Away Team Details */}
            <div className=" mt-4 border-2 p-4 mb-4 flex flex-col justify-center">
              <div className="mb-2 block">
                <Label htmlFor="awayTeam" value="Away Team" />
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Name" />
                  </div>
                  <TextInput
                    id="name"
                    required={true}
                    value={form.awayTeam.name}
                    onChange={awayTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Official Name" />
                  </div>
                  <TextInput
                    id="officialName"
                    required={true}
                    value={form.homeTeam.officialName}
                    onChange={awayTeamHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Slug" />
                  </div>
                  <TextInput
                    id="slug"
                    required={true}
                    value={form.awayTeam.slug}
                    onChange={awayTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Abbreviation" />
                  </div>
                  <TextInput
                    id="abbreviation"
                    required={true}
                    value={form.awayTeam.abbreviation}
                    onChange={awayTeamHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Team Country Code" />
                  </div>
                  <TextInput
                    id="teamCountryCode"
                    required={true}
                    value={form.awayTeam.teamCountryCode}
                    onChange={awayTeamHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="awayTeam" value="Stage Position" />
                  </div>
                  <TextInput
                    id="stagePosition"
                    required={false}
                    value={form.awayTeam.stagePosition || ''}
                    onChange={awayTeamHandleChange}
                  />
                </div>
              </div>
            </div>
            {/*  // Results */}
            <div className=" mt-4 border-2 p-4 mb-4 flex flex-col justify-center">
              <div className="mb-2 block">
                <Label htmlFor="result" value="Result" />
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="homeGoals" value="Home Goals" />
                  </div>
                  <TextInput
                    id="homeGoals"
                    required={true}
                    value={form.result.homeGoals}
                    onChange={resultHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label htmlFor="awayGoals" value="Away Goals" />
                  </div>
                  <TextInput
                    id="awayGoals"
                    required={true}
                    value={form.result.awayGoals}
                    onChange={resultHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="winner" value=" Winner" />
                  </div>
                  <TextInput
                    id="winner"
                    required={true}
                    value={form.result.winner || ''}
                    onChange={resultHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label htmlFor="winnerId" value="Winner Id" />
                  </div>
                  <TextInput
                    id="winnerId"
                    required={true}
                    value={form.result.winnerId || ''}
                    onChange={resultHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label htmlFor="message" value=" Message" />
                  </div>
                  <TextInput
                    id="message"
                    required={true}
                    value={form.result.message || ''}
                    onChange={resultHandleChange}
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                {/* <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="goals" value=" Goals" />
                  </div>
                  <TextInput
                    id="result"
                    required={true}
                    value={form.result.goals || }
                    onChange={handleChange}
                  />
                </div> */}
              </div>
            </div>
            {/*  // Stage */}
            <div className=" mt-4 border-2 p-4 mb-4 flex flex-col justify-center">
              <div className="mb-2 block">
                <Label htmlFor="stage" value="Stage" />
              </div>
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="id" value="ID" />
                  </div>
                  <TextInput
                    id="id"
                    required={true}
                    value={form.stage.id}
                    onChange={stageHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label htmlFor="name" value=" Name" />
                  </div>
                  <TextInput
                    id="name"
                    required={true}
                    value={form.stage.name}
                    onChange={stageHandleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label htmlFor="ordering" value=" Ordering" />
                  </div>
                  <TextInput
                    id="ordering"
                    required={true}
                    value={form.stage.ordering}
                    onChange={stageHandleChange}
                  />
                </div>
              </div>
            </div>
            {/*  // Other */}
            <div className=" mt-4 border-2 p-4 mb-4 flex flex-col justify-center">
              <div className="flex justify-evenly">
                <div className="p-2">
                  <div className="mb-2 block">
                    <Label htmlFor="group" value="Group" />
                  </div>
                  <TextInput
                    id="group"
                    required={false}
                    value={form.group || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="originCompetitionId"
                      value=" Origin Competition Id"
                    />
                  </div>
                  <TextInput
                    id="originCompetitionId"
                    required={true}
                    value={form.originCompetitionId}
                    onChange={handleChange}
                  />
                </div>
                <div className="p-2">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="originCompetitionName"
                      value=" Origin Competition Name"
                    />
                  </div>
                  <TextInput
                    id="originCompetitionName"
                    required={true}
                    value={form.originCompetitionName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button
              className="text-lg font-medium text-white dark:text-gray-300 w-5/12 h-22 text-blue-700 dark:text-blue-500  rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-1 mt-3"
              onClick={addNewEventHandler}
            >
              Add
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
