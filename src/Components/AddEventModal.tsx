import { Label, Modal, TextInput } from 'flowbite-react';
import { Fragment, useState } from 'react';

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
  sport: string;
  stadium: string | undefined;
  homeTeam: {
    name: string;
    officialName: string;
    slug: string;
    abbreviation: string;
    teamCountryCode: string;
    stagePosition: string | undefined;
  };
  awayTeam: {
    name: string;
    officialName: string;
    slug: string;
    abbreviation: string;
    teamCountryCode: string;
    stagePosition: string | undefined;
  };
  result: {
    homeGoals: number;
    awayGoals: number;
    winner: string;
    message: string | undefined;
    goals: number[] | undefined;
    yellowCards: number[] | undefined;
    secondYellowCards: number[] | undefined;
    directRedCards: number[] | undefined;
  };
  stage: {
    id: string;
    name: string;
    ordering: number;
  };
  group: string | undefined;
  originCompetitionId: string;
  originCompetitionName: string;
};

const initialFormValues = {
  season: 0,
  status: '',
  dateVenue: '',
  timeVenueUTC: '',
  sport: '',
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
    message: '',
    goals: [],
    yellowCards: [],
    secondYellowCards: [],
    directRedCards: [],
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
  // To add New Event
  async function addNewEventHandler() {
    console.log(form);
    props.setAllEvents([...props.allEvents, form]);
  }
  return (
    <div className="h-screen">
      <Modal
        show={props.openModal}
        size="xl"
        popup={true}
        onClose={() => {
          props.setOpenModal(false);
        }}
      >
        <Modal.Header />
        <Modal.Body style={{ height: '700px', overflow: 'auto' }}>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 w-full h-full ">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white p-2">
              Create your own Event
            </h3>
            <div className="p-2 flex">
              <div className="mb-2 block">
                <Label htmlFor="season" value="Season" />
              </div>
              <TextInput
                id="season"
                required={true}
                value={form.season}
                onChange={handleChange}
              />
              <div className="mb-2 block">
                <Label htmlFor="status" value="Status" />
              </div>
              <TextInput
                id="status"
                required={true}
                value={form.status}
                onChange={handleChange}
              />
            </div>
            <div className="p-2">
              <Label htmlFor="date" value=" Date" />
              <TextInput
                id="dateVenue"
                type={'date'}
                value={form.dateVenue}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="p-2">
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
                <Label htmlFor="sport" value="Sport Name" />
              </div>
              <TextInput
                id="sport"
                required={true}
                value={form.sport}
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
                value={form.stadium}
                onChange={handleChange}
              />
            </div>
            {/*  // Home Team Details */}
            <div className="mt-4 border-2 p-4 mb-4 ">
              <Label htmlFor="homeTeam" value="Home Team" />
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Name" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={true}
                  value={form.homeTeam.name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Official Name" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={true}
                  value={form.homeTeam.officialName}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Slug" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={true}
                  value={form.homeTeam.slug}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Abbreviation" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={true}
                  value={form.homeTeam.abbreviation}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Team Country Code" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={true}
                  value={form.homeTeam.teamCountryCode}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <div className="mb-2 block">
                  <Label htmlFor="homeTeam" value="Stage Position" />
                </div>
                <TextInput
                  id="homeTeam"
                  required={false}
                  value={form.homeTeam.stagePosition}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/*  // Away Team Details */}
            <div className="p-2">
              <div className="mb-2 block">
                <Label htmlFor="awayTeam" value="Away Team" />
              </div>
              <TextInput
                id="awayTeam"
                required={true}
                value={form.awayTeam.name}
                onChange={handleChange}
              />
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
