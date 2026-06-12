import { Surface, RunningStyle } from '../../types/enums';

export type DataHorse = {
	name: string;
	year: number;
	finishPosition: number;
	dirtAbility: number;
	turfAbility: number;
	speed: number;
	stamina: number;
	runningStyle: RunningStyle;
};

const horses: Record<string, DataHorse[]> = {
	'Dirt Mile': [
		{
			name: 'Nysos',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 40,
			speed: 97,
			stamina: 88,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Citizen Bull',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 35,
			speed: 96,
			stamina: 86,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Chancer McPatrick',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 55,
			speed: 90,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Full Serrano',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 30,
			speed: 94,
			stamina: 87,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Post Time',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 35,
			speed: 91,
			stamina: 88,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Domestic Product',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 40,
			speed: 90,
			stamina: 84,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: "Cody's Wish",
			year: 2023,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 25,
			speed: 96,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'National Treasure',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 35,
			speed: 95,
			stamina: 90,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Skippylongstocking',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 30,
			speed: 91,
			stamina: 92,
			runningStyle: RunningStyle.MidPack
		},

		{
			name: "Cody's Wish",
			year: 2022,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 25,
			speed: 96,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Cyberknife',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 30,
			speed: 94,
			stamina: 89,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Slow Down Andy',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 35,
			speed: 90,
			stamina: 87,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Life Is Good',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 99,
			stamina: 89,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Ginobili',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 89,
			turfAbility: 30,
			speed: 89,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Restrainedvengence',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 55,
			speed: 86,
			stamina: 85,
			runningStyle: RunningStyle.MidPack
		},

		{
			name: 'Knicks Go',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 99,
			stamina: 90,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: "Jesus' Team",
			year: 2020,
			finishPosition: 2,
			dirtAbility: 90,
			turfAbility: 35,
			speed: 89,
			stamina: 86,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Sharp Samurai',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 80,
			speed: 88,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Spun To Run',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 95,
			stamina: 88,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Omaha Beach',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 65,
			speed: 96,
			stamina: 89,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Blue Chipper',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 25,
			speed: 90,
			stamina: 83,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'City of Light',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 45,
			speed: 98,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Seeking the Soul',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 92,
			stamina: 91,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Bravazo',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 89,
			stamina: 90,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Battle of Midway',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 93,
			turfAbility: 45,
			speed: 94,
			stamina: 87,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Sharp Azteca',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 30,
			speed: 98,
			stamina: 86,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Awesome Slew',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 20,
			speed: 89,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Tamarkuz',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 92,
			turfAbility: 35,
			speed: 91,
			stamina: 87,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Gun Runner',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 97,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Accelerate',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 40,
			speed: 95,
			stamina: 95,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: "Liam's Map",
			year: 2015,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 30,
			speed: 99,
			stamina: 88,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Lea',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 85,
			speed: 92,
			stamina: 88,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Red Vine',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 40,
			speed: 87,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Goldencents',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 35,
			speed: 97,
			stamina: 87,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Tapiture',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 25,
			speed: 91,
			stamina: 88,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Pants On Fire',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 20,
			speed: 87,
			stamina: 84,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Goldencents',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 35,
			speed: 97,
			stamina: 87,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Golden Ticket',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 89,
			turfAbility: 20,
			speed: 88,
			stamina: 85,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Brujo De Olleros',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 87,
			turfAbility: 15,
			speed: 86,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Tapizar',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 25,
			speed: 95,
			stamina: 86,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Rail Trip',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 90,
			turfAbility: 35,
			speed: 88,
			stamina: 87,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Delegation',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 20,
			speed: 87,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: "Caleb's Posse",
			year: 2011,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 93,
			stamina: 88,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Shackleford',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 95,
			stamina: 88,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Tres Borrachos',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 86,
			turfAbility: 15,
			speed: 84,
			stamina: 83,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Dakota Phone',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 90,
			turfAbility: 20,
			speed: 88,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Morning Line',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 91,
			turfAbility: 15,
			speed: 92,
			stamina: 86,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Gayego',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 20,
			speed: 89,
			stamina: 84,
			runningStyle: RunningStyle.Stalker
		}
	],
	Classic: [
		{
			name: 'Forever Young',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 30,
			speed: 97,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Sierra Leone',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 35,
			speed: 95,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Fierceness',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 97,
			turfAbility: 25,
			speed: 99,
			stamina: 94,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Sierra Leone',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 35,
			speed: 95,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Fierceness',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 25,
			speed: 99,
			stamina: 94,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Forever Young',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 99,
			turfAbility: 30,
			speed: 97,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'White Abarrio',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 25,
			speed: 96,
			stamina: 93,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Derma Sotogake',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Proxy',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 93,
			turfAbility: 20,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Flightline',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 30,
			speed: 100,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Olympiad',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 94,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Taiba',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 96,
			turfAbility: 25,
			speed: 97,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Knicks Go',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 99,
			stamina: 93,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Medina Spirit',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 95,
			stamina: 92,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Essential Quality',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Authentic',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 99,
			stamina: 95,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Improbable',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 25,
			speed: 94,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Global Campaign',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 93,
			stamina: 91,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Vino Rosso',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'McKinzie',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 25,
			speed: 97,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Higher Power',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 20,
			speed: 90,
			stamina: 93,
			runningStyle: RunningStyle.MidPack
		},

		{
			name: 'Accelerate',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 40,
			speed: 95,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Gunnevera',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 15,
			speed: 89,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Thunder Snow',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 70,
			speed: 90,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Gun Runner',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 97,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Collected',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 30,
			speed: 96,
			stamina: 92,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'West Coast',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Arrogate',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 25,
			speed: 99,
			stamina: 100,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'California Chrome',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 99,
			turfAbility: 35,
			speed: 98,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Keen Ice',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 87,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'American Pharoah',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 30,
			speed: 98,
			stamina: 99,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Effinex',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 90,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Honor Code',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 92,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Bayern',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 98,
			stamina: 91,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Toast Of New York',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 80,
			speed: 91,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'California Chrome',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 99,
			turfAbility: 35,
			speed: 98,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Mucho Macho Man',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Will Take Charge',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 92,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Declaration of War',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 95,
			speed: 90,
			stamina: 93,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Fort Larned',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 95,
			stamina: 94,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Mucho Macho Man',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Flat Out',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 90,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Drosselmeyer',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 93,
			turfAbility: 15,
			speed: 88,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Game On Dude',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 96,
			stamina: 95,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Ruler On Ice',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 88,
			turfAbility: 15,
			speed: 84,
			stamina: 93,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Blame',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 95,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Zenyatta',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 99,
			turfAbility: 25,
			speed: 94,
			stamina: 100,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Fly Down',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 15,
			speed: 86,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		}
	],
	Turf: [
		{
			name: 'Ethical Diamond',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 35,
			turfAbility: 96,
			speed: 91,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Rebel's Romance",
			year: 2025,
			finishPosition: 2,
			dirtAbility: 45,
			turfAbility: 99,
			speed: 93,
			stamina: 100,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'El Cordobes',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 30,
			turfAbility: 93,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: "Rebel's Romance",
			year: 2024,
			finishPosition: 1,
			dirtAbility: 45,
			turfAbility: 99,
			speed: 93,
			stamina: 100,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Rousham Park',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 30,
			turfAbility: 96,
			speed: 91,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Shahryar',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 35,
			turfAbility: 97,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Auguste Rodin',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Up to the Mark',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 30,
			turfAbility: 96,
			speed: 94,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Shahryar',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 35,
			turfAbility: 97,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},

		{
			name: "Rebel's Romance",
			year: 2022,
			finishPosition: 1,
			dirtAbility: 45,
			turfAbility: 99,
			speed: 93,
			stamina: 100,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Stone Age',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 30,
			turfAbility: 93,
			speed: 90,
			stamina: 95,
			runningStyle: RunningStyle.MidPack
		},
		{
			name: 'War Like Goddess',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 97,
			speed: 89,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Yibir',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 97,
			speed: 92,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Broome',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 25,
			turfAbility: 95,
			speed: 91,
			stamina: 97,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Teona',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 94,
			speed: 89,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Tarnawa',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Magical',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Channel Maker',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 94,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Bricks and Mortar',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 35,
			turfAbility: 99,
			speed: 95,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'United',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 93,
			speed: 88,
			stamina: 97,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Anthony Van Dyck',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 96,
			speed: 91,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Enable',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 100,
			speed: 95,
			stamina: 100,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Magical',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: "Sadler's Joy",
			year: 2018,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 87,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Talismanic',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 95,
			speed: 90,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Beach Patrol',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 95,
			speed: 91,
			stamina: 96,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Highland Reel',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 93,
			stamina: 99,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Highland Reel',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 93,
			stamina: 99,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Flintshire',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Found',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Found',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Golden Horn',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 25,
			turfAbility: 100,
			speed: 95,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Big Blue Kitten',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 89,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Main Sequence',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 91,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Flintshire',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Twilight Eclipse',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 88,
			stamina: 97,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Magician',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 97,
			speed: 93,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'The Fugue',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 92,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Indy Point',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 93,
			speed: 89,
			stamina: 95,
			runningStyle: RunningStyle.MidPack
		},

		{
			name: 'Little Mike',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 35,
			turfAbility: 95,
			speed: 94,
			stamina: 93,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Point of Entry',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 91,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'St Nicholas Abbey',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 99,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'St Nicholas Abbey',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 99,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Sea Moon',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 89,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Brilliant Speed',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 25,
			turfAbility: 91,
			speed: 87,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Dangerous Midge',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Champ Pegasus',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 92,
			speed: 87,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Behkabad',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 90,
			stamina: 97,
			runningStyle: RunningStyle.Stalker
		}
	],
	Sprint: [
		{
			name: 'Bentornato',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 99,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Imagination',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 25,
			speed: 96,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Dr. Venkman',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 96,
			stamina: 80,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Straight No Chaser',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 100,
			stamina: 79,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Bentornato',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 99,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Mullikin',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 93,
			turfAbility: 15,
			speed: 95,
			stamina: 77,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Elite Power',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 99,
			stamina: 82,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Gunite',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 97,
			stamina: 80,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Nakatomi',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 96,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Elite Power',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 99,
			stamina: 82,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'C Z Rocket',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 94,
			stamina: 79,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Jackie's Warrior",
			year: 2022,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 100,
			stamina: 80,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Aloha West',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 95,
			stamina: 80,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Dr. Schivel',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 95,
			stamina: 80,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Following Sea',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 15,
			speed: 94,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Whitmore',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 15,
			speed: 96,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'C Z Rocket',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 94,
			stamina: 79,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Firenze Fire',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 96,
			stamina: 78,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Mitole',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 100,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Shancelot',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 99,
			stamina: 75,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Whitmore',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 97,
			turfAbility: 15,
			speed: 96,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Roy H',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 99,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Whitmore',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 15,
			speed: 96,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Imperial Hint',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 100,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Roy H',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 99,
			stamina: 81,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Imperial Hint',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 100,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Mind Your Biscuits',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 97,
			turfAbility: 15,
			speed: 97,
			stamina: 80,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Drefong',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 100,
			stamina: 80,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Mind Your Biscuits',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 15,
			speed: 97,
			stamina: 80,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'A. P. Indian',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 95,
			stamina: 78,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Runhappy',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 15,
			speed: 100,
			stamina: 79,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Private Zone',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 97,
			stamina: 77,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Favorite Tale',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 15,
			speed: 93,
			stamina: 76,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Work All Week',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 95,
			stamina: 79,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Secret Circle',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 96,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Private Zone',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 97,
			stamina: 77,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Secret Circle',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 96,
			stamina: 78,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Laugh Track',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 89,
			turfAbility: 25,
			speed: 91,
			stamina: 76,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Gentlemen's Bet",
			year: 2013,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 15,
			speed: 92,
			stamina: 75,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Trinniberg',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 93,
			turfAbility: 15,
			speed: 100,
			stamina: 72,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'The Lumber Guy',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 90,
			turfAbility: 15,
			speed: 94,
			stamina: 75,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Smiling Tiger',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 93,
			turfAbility: 35,
			speed: 93,
			stamina: 78,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Amazombie',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 96,
			stamina: 79,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Force Freeze',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 89,
			turfAbility: 15,
			speed: 91,
			stamina: 76,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Jackson Bend',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 25,
			speed: 92,
			stamina: 79,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Big Drama',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 99,
			stamina: 77,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Hamazing Destiny',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 89,
			turfAbility: 15,
			speed: 91,
			stamina: 75,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Smiling Tiger',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 93,
			turfAbility: 35,
			speed: 93,
			stamina: 78,
			runningStyle: RunningStyle.Closer
		}
	],
	'Turf Sprint': [
		{
			name: 'Shisospicy',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 97,
			speed: 100,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Ag Bullet',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 95,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Khaadem',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 99,
			stamina: 71,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Starlust',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 99,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Motorious',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Ag Bullet',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 95,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Nobals',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 96,
			speed: 99,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Big Invasion',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Aesop's Fables",
			year: 2023,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Caravel',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 99,
			stamina: 71,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Emaraaty Ana',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Creative Force',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 97,
			stamina: 71,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Golden Pal',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 100,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Lieutenant Dan',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 92,
			speed: 95,
			stamina: 69,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: "Charmaine's Mia",
			year: 2021,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 93,
			speed: 95,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Glass Slippers',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Wet Your Whistle',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 90,
			speed: 94,
			stamina: 69,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Leinster',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 95,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Belvoir Bay',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Om',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 94,
			speed: 95,
			stamina: 70,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Shekky Shebaz',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 92,
			speed: 94,
			stamina: 69,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Stormy Liberal',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'World of Trouble',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 75,
			turfAbility: 97,
			speed: 99,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Disco Partner',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 96,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Stormy Liberal',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Richard's Boy",
			year: 2017,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 96,
			stamina: 69,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Disco Partner',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 96,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Obviously',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 97,
			speed: 99,
			stamina: 71,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Om',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 94,
			speed: 95,
			stamina: 70,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Pure Sensation',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Mongolian Saturday',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 98,
			stamina: 69,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Lady Shipman',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 99,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Green Mask',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 95,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: "Bobby's Kitten",
			year: 2014,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 98,
			stamina: 71,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'No Nay Never',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 99,
			speed: 100,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Undrafted',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 96,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Mizdirection',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Reneesgotzip',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Tightend Touchdown',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 91,
			speed: 93,
			stamina: 69,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Mizdirection',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 97,
			stamina: 70,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Unbridled's Note",
			year: 2012,
			finishPosition: 2,
			dirtAbility: 35,
			turfAbility: 92,
			speed: 96,
			stamina: 69,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Reneesgotzip',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 98,
			stamina: 70,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Regally Ready',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 95,
			stamina: 69,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Country Day',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 91,
			speed: 93,
			stamina: 69,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Perfect Officer',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 89,
			speed: 91,
			stamina: 68,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Chamberlain Bridge',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 94,
			stamina: 69,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Central City',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 89,
			speed: 91,
			stamina: 68,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Unzip Me',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 92,
			speed: 94,
			stamina: 69,
			runningStyle: RunningStyle.FrontRunner
		}
	],
	Distaff: [
		{
			name: 'Scylla',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 95,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Nitrogen',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 30,
			speed: 91,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Regaled',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 20,
			speed: 90,
			stamina: 91,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Thorpedo Anna',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 98,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Raging Sea',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 93,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Candied',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 25,
			speed: 91,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Idiomatic',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 96,
			stamina: 95,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Randomized',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 92,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Le Da Vida',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 89,
			turfAbility: 20,
			speed: 88,
			stamina: 90,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Malathaat',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Blue Stripe',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 20,
			speed: 91,
			stamina: 93,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Clairiere',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 92,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Marche Lorraine',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 91,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Dunbar Road',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 90,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Malathaat',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 94,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Monomoy Girl',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 97,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Valiance',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 20,
			speed: 91,
			stamina: 93,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Dunbar Road',
			year: 2020,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 90,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Blue Prize',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 91,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Midnight Bisou',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 95,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Serengeti Empress',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 97,
			stamina: 91,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Monomoy Girl',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 97,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Wow Cat',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 91,
			turfAbility: 20,
			speed: 89,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Midnight Bisou',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 95,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Forever Unbridled',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 93,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Abel Tasman',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 92,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Paradise Woods',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 95,
			stamina: 89,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Beholder',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 25,
			speed: 99,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Songbird',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 99,
			stamina: 95,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Forever Unbridled',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 93,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Stopchargingmaria',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 92,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Stellar Wind',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 95,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Curalina',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 90,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Untapable',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 96,
			stamina: 97,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: "Don't Tell Sophia",
			year: 2014,
			finishPosition: 2,
			dirtAbility: 91,
			turfAbility: 20,
			speed: 88,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Iotapa',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 92,
			stamina: 93,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Beholder',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 25,
			speed: 99,
			stamina: 96,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Close Hatches',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 92,
			stamina: 95,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Authenticity',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 90,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Royal Delta',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 95,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'My Miss Aurelia',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 96,
			stamina: 93,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Include Me Out',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 90,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Royal Delta',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 95,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: "It's Tricky",
			year: 2011,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 93,
			stamina: 92,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Pachattack',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 20,
			speed: 88,
			stamina: 91,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Unrivaled Belle',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 91,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Blind Luck',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 92,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Havre de Grace',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 95,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		}
	],
	'Filly and Mare Sprint': [
		{
			name: 'Splendora',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 98,
			stamina: 84,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Vahva',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 20,
			speed: 95,
			stamina: 83,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Hope Road',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 94,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Soul Of An Angel',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 97,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Society',
			year: 2024,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 99,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Pleasant',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 96,
			stamina: 83,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Goodnight Olive',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 98,
			stamina: 86,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Yuugiri',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 92,
			turfAbility: 15,
			speed: 94,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Three Witches',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 20,
			speed: 93,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Goodnight Olive',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 98,
			stamina: 86,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Echo Zulu',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 98,
			turfAbility: 15,
			speed: 99,
			stamina: 84,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Wicked Halo',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 96,
			stamina: 84,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Ce Ce',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 98,
			turfAbility: 20,
			speed: 98,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Edgeway',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 95,
			stamina: 83,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Gamine',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 100,
			turfAbility: 15,
			speed: 100,
			stamina: 83,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Gamine',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 15,
			speed: 100,
			stamina: 83,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Serengeti Empress',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 15,
			speed: 97,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: "Bell's the One",
			year: 2020,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 95,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Covfefe',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 100,
			turfAbility: 15,
			speed: 100,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Bellafina',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 96,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Dawn the Destroyer',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 93,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Shamrock Rose',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 25,
			speed: 95,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Chalon',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 15,
			speed: 96,
			stamina: 81,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Anonymity',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 91,
			turfAbility: 20,
			speed: 93,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Bar of Gold',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 95,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Ami's Mesa",
			year: 2017,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 20,
			speed: 94,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Carina Mia',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 96,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Finest City',
			year: 2016,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 97,
			stamina: 83,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Wavell Avenue',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 95,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Paulassilverlining',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 95,
			stamina: 83,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Wavell Avenue',
			year: 2015,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 95,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'La Verdad',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 15,
			speed: 98,
			stamina: 81,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Taris',
			year: 2015,
			finishPosition: 3,
			dirtAbility: 94,
			turfAbility: 15,
			speed: 97,
			stamina: 82,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Judy The Beauty',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 97,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Better Lucky',
			year: 2014,
			finishPosition: 2,
			dirtAbility: 91,
			turfAbility: 40,
			speed: 93,
			stamina: 83,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Thank You Marylou',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 20,
			speed: 92,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Groupie Doll',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 99,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Judy The Beauty',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 97,
			turfAbility: 20,
			speed: 97,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Dance Card',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 20,
			speed: 94,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Groupie Doll',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 99,
			turfAbility: 20,
			speed: 99,
			stamina: 85,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Dust and Diamonds',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 93,
			turfAbility: 15,
			speed: 95,
			stamina: 81,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Switch',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Musical Romance',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 94,
			turfAbility: 20,
			speed: 95,
			stamina: 83,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Switch',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Her Smile',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 90,
			turfAbility: 20,
			speed: 92,
			stamina: 82,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Dubai Majesty',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 96,
			turfAbility: 20,
			speed: 97,
			stamina: 83,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Switch',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 95,
			turfAbility: 20,
			speed: 94,
			stamina: 84,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Evening Jewel',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 92,
			turfAbility: 25,
			speed: 92,
			stamina: 83,
			runningStyle: RunningStyle.Stalker
		}
	],
	'Filly and Mare Turf': [
		{
			name: 'Gezora',
			year: 2025,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 90,
			stamina: 99,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'She Feels Pretty',
			year: 2025,
			finishPosition: 2,
			dirtAbility: 25,
			turfAbility: 99,
			speed: 94,
			stamina: 97,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Diamond Rain',
			year: 2025,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 89,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Moira',
			year: 2024,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 97,
			speed: 91,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: "Cinderella's Dream",
			year: 2024,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 90,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Didia',
			year: 2024,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 96,
			speed: 90,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Inspiral',
			year: 2023,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 100,
			speed: 96,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Warm Heart',
			year: 2023,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 92,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Moira',
			year: 2023,
			finishPosition: 3,
			dirtAbility: 25,
			turfAbility: 97,
			speed: 91,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Tuesday',
			year: 2022,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 91,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'In Italian',
			year: 2022,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 97,
			speed: 95,
			stamina: 93,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: 'Lady Speightspeare',
			year: 2022,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 95,
			speed: 93,
			stamina: 94,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: 'Loves Only You',
			year: 2021,
			finishPosition: 1,
			dirtAbility: 20,
			turfAbility: 99,
			speed: 94,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'My Sister Nat',
			year: 2021,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 88,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'War Like Goddess',
			year: 2021,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 89,
			stamina: 100,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Audarya',
			year: 2020,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 92,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Rushing Fall',
			year: 2020,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 98,
			speed: 94,
			stamina: 93,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: "Harvey's Lil Goil",
			year: 2020,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 93,
			speed: 88,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Iridessa',
			year: 2019,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 91,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Vasilika',
			year: 2019,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 97,
			speed: 93,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Sistercharlie',
			year: 2019,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 99,
			speed: 92,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Sistercharlie',
			year: 2018,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 99,
			speed: 92,
			stamina: 98,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Wild Illusion',
			year: 2018,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 91,
			stamina: 96,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'A Raving Beauty',
			year: 2018,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 89,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Wuheida',
			year: 2017,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 92,
			stamina: 92,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Rhododendron',
			year: 2017,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 93,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Cambodia',
			year: 2017,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 92,
			speed: 90,
			stamina: 91,
			runningStyle: RunningStyle.Closer
		},

		{
			name: "Queen's Trust",
			year: 2016,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 90,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Lady Eli',
			year: 2016,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 99,
			speed: 93,
			stamina: 97,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Avenge',
			year: 2016,
			finishPosition: 3,
			dirtAbility: 20,
			turfAbility: 94,
			speed: 92,
			stamina: 92,
			runningStyle: RunningStyle.FrontRunner
		},

		{
			name: "Stephanie's Kitten",
			year: 2015,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 91,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Legatissimo',
			year: 2015,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 94,
			stamina: 95,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: "Queen's Jewel",
			year: 2015,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 89,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Dayatthespa',
			year: 2014,
			finishPosition: 1,
			dirtAbility: 25,
			turfAbility: 97,
			speed: 95,
			stamina: 92,
			runningStyle: RunningStyle.FrontRunner
		},
		{
			name: "Stephanie's Kitten",
			year: 2014,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 98,
			speed: 91,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Just The Judge',
			year: 2014,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 94,
			speed: 90,
			stamina: 93,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Dank',
			year: 2013,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 94,
			stamina: 93,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Romantica',
			year: 2013,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 90,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Alterite',
			year: 2013,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 91,
			stamina: 94,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Zagora',
			year: 2012,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 92,
			stamina: 95,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Marketing Mix',
			year: 2012,
			finishPosition: 2,
			dirtAbility: 20,
			turfAbility: 96,
			speed: 91,
			stamina: 95,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'The Fugue',
			year: 2012,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 99,
			speed: 94,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},

		{
			name: 'Perfect Shirl',
			year: 2011,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Nahrain',
			year: 2011,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 96,
			speed: 90,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Misty For Me',
			year: 2011,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 97,
			speed: 92,
			stamina: 94,
			runningStyle: RunningStyle.Stalker
		},

		{
			name: 'Shared Account',
			year: 2010,
			finishPosition: 1,
			dirtAbility: 15,
			turfAbility: 95,
			speed: 89,
			stamina: 96,
			runningStyle: RunningStyle.Closer
		},
		{
			name: 'Midday',
			year: 2010,
			finishPosition: 2,
			dirtAbility: 15,
			turfAbility: 100,
			speed: 93,
			stamina: 98,
			runningStyle: RunningStyle.Stalker
		},
		{
			name: 'Keertana',
			year: 2010,
			finishPosition: 3,
			dirtAbility: 15,
			turfAbility: 92,
			speed: 87,
			stamina: 95,
			runningStyle: RunningStyle.Closer
		}
	]
};

const trainers = [
	{
		name: 'Cherie DeVaux',
		year: 2026,
		turfAbility: 92,
		dirtAbility: 88,
		speedAbility: 85,
		staminaAbility: 93
	},
	{
		name: 'Bill Mott',
		year: 2025,
		turfAbility: 92,
		dirtAbility: 93,
		speedAbility: 82,
		staminaAbility: 96
	},
	{
		name: 'Kenny McPeek',
		year: 2024,
		turfAbility: 84,
		dirtAbility: 92,
		speedAbility: 87,
		staminaAbility: 92
	},
	{
		name: 'Gustavo Delgado',
		year: 2023,
		turfAbility: 78,
		dirtAbility: 88,
		speedAbility: 90,
		staminaAbility: 84
	},
	{
		name: 'Eric Reed',
		year: 2022,
		turfAbility: 72,
		dirtAbility: 85,
		speedAbility: 80,
		staminaAbility: 86
	},
	{
		name: 'Brad Cox',
		year: 2021,
		turfAbility: 84,
		dirtAbility: 96,
		speedAbility: 95,
		staminaAbility: 87
	},
	{
		name: 'Bob Baffert',
		year: 2020,
		turfAbility: 72,
		dirtAbility: 99,
		speedAbility: 100,
		staminaAbility: 86
	},
	{
		name: 'Todd Pletcher',
		year: 2017,
		turfAbility: 88,
		dirtAbility: 97,
		speedAbility: 94,
		staminaAbility: 90
	},
	{
		name: "Doug O'Neill",
		year: 2016,
		turfAbility: 75,
		dirtAbility: 91,
		speedAbility: 92,
		staminaAbility: 84
	},
	{
		name: 'Art Sherman',
		year: 2014,
		turfAbility: 70,
		dirtAbility: 90,
		speedAbility: 88,
		staminaAbility: 89
	},
	{
		name: 'Claude McGaughey III',
		year: 2013,
		turfAbility: 93,
		dirtAbility: 89,
		speedAbility: 78,
		staminaAbility: 96
	},
	{
		name: 'Graham Motion',
		year: 2011,
		turfAbility: 95,
		dirtAbility: 85,
		speedAbility: 78,
		staminaAbility: 97
	},
	{
		name: 'Bennie Woolley Jr.',
		year: 2009,
		turfAbility: 65,
		dirtAbility: 82,
		speedAbility: 75,
		staminaAbility: 84
	},
	{
		name: 'Rick Dutrow Jr.',
		year: 2008,
		turfAbility: 75,
		dirtAbility: 93,
		speedAbility: 97,
		staminaAbility: 80
	},
	{
		name: 'Carl Nafzger',
		year: 2007,
		turfAbility: 70,
		dirtAbility: 88,
		speedAbility: 80,
		staminaAbility: 93
	},
	{
		name: 'Michael Matz',
		year: 2006,
		turfAbility: 90,
		dirtAbility: 86,
		speedAbility: 76,
		staminaAbility: 96
	},
	{
		name: 'John Shirreffs',
		year: 2005,
		turfAbility: 91,
		dirtAbility: 87,
		speedAbility: 74,
		staminaAbility: 98
	},
	{
		name: 'John Servis',
		year: 2004,
		turfAbility: 72,
		dirtAbility: 88,
		speedAbility: 90,
		staminaAbility: 84
	},
	{
		name: 'Barclay Tagg',
		year: 2003,
		turfAbility: 86,
		dirtAbility: 88,
		speedAbility: 82,
		staminaAbility: 90
	},
	{
		name: 'John Ward Jr.',
		year: 2001,
		turfAbility: 74,
		dirtAbility: 87,
		speedAbility: 83,
		staminaAbility: 88
	},
	{
		name: 'Neil Drysdale',
		year: 2000,
		turfAbility: 98,
		dirtAbility: 84,
		speedAbility: 72,
		staminaAbility: 99
	},
	{
		name: 'D. Wayne Lukas',
		year: 1999,
		turfAbility: 74,
		dirtAbility: 97,
		speedAbility: 98,
		staminaAbility: 84
	},
	{
		name: 'Nick Zito',
		year: 1994,
		turfAbility: 78,
		dirtAbility: 92,
		speedAbility: 84,
		staminaAbility: 94
	},
	{
		name: 'MacKenzie Miller',
		year: 1993,
		turfAbility: 80,
		dirtAbility: 89,
		speedAbility: 82,
		staminaAbility: 91
	},
	{
		name: 'Lynn Whiting',
		year: 1992,
		turfAbility: 72,
		dirtAbility: 88,
		speedAbility: 83,
		staminaAbility: 92
	},
	{
		name: 'Charlie Whittingham',
		year: 1989,
		turfAbility: 99,
		dirtAbility: 91,
		speedAbility: 80,
		staminaAbility: 99
	},
	{
		name: 'Jack Van Berg',
		year: 1987,
		turfAbility: 65,
		dirtAbility: 92,
		speedAbility: 91,
		staminaAbility: 83
	},
	{
		name: 'Cam Gambolati',
		year: 1985,
		turfAbility: 68,
		dirtAbility: 86,
		speedAbility: 95,
		staminaAbility: 78
	},
	{
		name: 'Woody Stephens',
		year: 1984,
		turfAbility: 68,
		dirtAbility: 97,
		speedAbility: 99,
		staminaAbility: 79
	},
	{
		name: 'David Cross Jr.',
		year: 1983,
		turfAbility: 70,
		dirtAbility: 85,
		speedAbility: 82,
		staminaAbility: 84
	},
	{
		name: 'Edwin Gregson',
		year: 1982,
		turfAbility: 78,
		dirtAbility: 89,
		speedAbility: 84,
		staminaAbility: 88
	},
	{
		name: 'John Campo',
		year: 1981,
		turfAbility: 72,
		dirtAbility: 87,
		speedAbility: 80,
		staminaAbility: 90
	},
	{
		name: 'LeRoy Jolley',
		year: 1980,
		turfAbility: 82,
		dirtAbility: 90,
		speedAbility: 84,
		staminaAbility: 91
	}
];

const jockeys = [
	{
		name: 'Jose Ortiz',
		year: 2026,
		turfAbility: 94,
		dirtAbility: 92,
		speedAbility: 91,
		staminaAbility: 92
	},
	{
		name: 'Junior Alvarado',
		year: 2025,
		turfAbility: 84,
		dirtAbility: 91,
		speedAbility: 88,
		staminaAbility: 89
	},
	{
		name: 'Brian Joseph Hernandez Jr.',
		year: 2024,
		turfAbility: 82,
		dirtAbility: 90,
		speedAbility: 86,
		staminaAbility: 91
	},
	{
		name: 'Javier Castellano',
		year: 2023,
		turfAbility: 95,
		dirtAbility: 94,
		speedAbility: 89,
		staminaAbility: 93
	},
	{
		name: 'Sonny Leon',
		year: 2022,
		turfAbility: 70,
		dirtAbility: 84,
		speedAbility: 82,
		staminaAbility: 83
	},
	{
		name: 'Florent Geroux',
		year: 2021,
		turfAbility: 88,
		dirtAbility: 94,
		speedAbility: 93,
		staminaAbility: 88
	},
	{
		name: 'John Velazquez',
		year: 2020,
		turfAbility: 92,
		dirtAbility: 97,
		speedAbility: 94,
		staminaAbility: 90
	},
	{
		name: 'Flavien Prat',
		year: 2019,
		turfAbility: 99,
		dirtAbility: 94,
		speedAbility: 89,
		staminaAbility: 96
	},
	{
		name: 'Mike Smith',
		year: 2018,
		turfAbility: 90,
		dirtAbility: 98,
		speedAbility: 93,
		staminaAbility: 97
	},
	{
		name: 'Mario Gutierrez',
		year: 2016,
		turfAbility: 75,
		dirtAbility: 90,
		speedAbility: 88,
		staminaAbility: 86
	},
	{
		name: 'Victor Espinoza',
		year: 2015,
		turfAbility: 82,
		dirtAbility: 96,
		speedAbility: 95,
		staminaAbility: 88
	},
	{
		name: 'Joel Rosario',
		year: 2013,
		turfAbility: 91,
		dirtAbility: 94,
		speedAbility: 84,
		staminaAbility: 97
	},
	{
		name: 'Calvin Borel',
		year: 2010,
		turfAbility: 70,
		dirtAbility: 95,
		speedAbility: 89,
		staminaAbility: 92
	},
	{
		name: 'Kent Desormeaux',
		year: 2008,
		turfAbility: 93,
		dirtAbility: 95,
		speedAbility: 88,
		staminaAbility: 96
	},
	{
		name: 'Edgar Prado',
		year: 2006,
		turfAbility: 88,
		dirtAbility: 94,
		speedAbility: 86,
		staminaAbility: 95
	},
	{
		name: 'Stewart Elliott',
		year: 2004,
		turfAbility: 72,
		dirtAbility: 88,
		speedAbility: 87,
		staminaAbility: 85
	},
	{
		name: 'Jose Santos',
		year: 2003,
		turfAbility: 84,
		dirtAbility: 93,
		speedAbility: 92,
		staminaAbility: 88
	},
	{
		name: 'Jorge Chavez',
		year: 2001,
		turfAbility: 84,
		dirtAbility: 92,
		speedAbility: 95,
		staminaAbility: 84
	},
	{
		name: 'Jerry Bailey',
		year: 1999,
		turfAbility: 95,
		dirtAbility: 98,
		speedAbility: 93,
		staminaAbility: 96
	},
	{
		name: 'Gary Stevens',
		year: 1997,
		turfAbility: 89,
		dirtAbility: 98,
		speedAbility: 95,
		staminaAbility: 94
	},
	{
		name: 'Chris Antley',
		year: 1999,
		turfAbility: 78,
		dirtAbility: 94,
		speedAbility: 96,
		staminaAbility: 86
	},
	{
		name: 'Chris McCarron',
		year: 1994,
		turfAbility: 92,
		dirtAbility: 96,
		speedAbility: 91,
		staminaAbility: 95
	},
	{
		name: 'Pat Day',
		year: 1992,
		turfAbility: 88,
		dirtAbility: 97,
		speedAbility: 90,
		staminaAbility: 95
	},
	{
		name: 'Craig Perret',
		year: 1990,
		turfAbility: 82,
		dirtAbility: 92,
		speedAbility: 88,
		staminaAbility: 87
	},
	{
		name: 'Pat Valenzuela',
		year: 1989,
		turfAbility: 80,
		dirtAbility: 95,
		speedAbility: 97,
		staminaAbility: 84
	},
	{
		name: 'Bill Shoemaker',
		year: 1986,
		turfAbility: 96,
		dirtAbility: 95,
		speedAbility: 88,
		staminaAbility: 98
	},
	{
		name: 'Angel Cordero Jr.',
		year: 1985,
		turfAbility: 87,
		dirtAbility: 96,
		speedAbility: 98,
		staminaAbility: 87
	},
	{
		name: 'Laffit Pincay Jr.',
		year: 1984,
		turfAbility: 91,
		dirtAbility: 97,
		speedAbility: 95,
		staminaAbility: 91
	},
	{
		name: 'Eddie Delahoussaye',
		year: 1983,
		turfAbility: 89,
		dirtAbility: 92,
		speedAbility: 86,
		staminaAbility: 94
	},
	{
		name: 'Jorge Velasquez',
		year: 1981,
		turfAbility: 86,
		dirtAbility: 94,
		speedAbility: 90,
		staminaAbility: 90
	},
	{
		name: 'Jacinto Vasquez',
		year: 1980,
		turfAbility: 85,
		dirtAbility: 92,
		speedAbility: 88,
		staminaAbility: 91
	}
];

const races = {
	'Dirt Mile': {
		distance: '1 mile',
		surface: Surface.Dirt,
		distanceFurlongs: 8
	},
	Classic: {
		distance: '1 1/4 miles',
		surface: Surface.Dirt,
		distanceFurlongs: 10
	},
	Turf: {
		distance: '1 1/2 miles',
		surface: Surface.Turf,
		distanceFurlongs: 12
	},
	Sprint: {
		distance: '6 furlongs',
		surface: Surface.Dirt,
		distanceFurlongs: 6
	},
	'Turf Sprint': {
		distance: '5 furlongs',
		surface: Surface.Turf,
		distanceFurlongs: 5
	},
	Distaff: {
		distance: '1 1/8 miles',
		surface: Surface.Dirt,
		distanceFurlongs: 9
	},
	'Filly and Mare Sprint': {
		distance: '7 furlongs',
		surface: Surface.Dirt,
		distanceFurlongs: 7
	},
	'Filly and Mare Turf': {
		distance: '1 3/8 miles',
		surface: Surface.Turf,
		distanceFurlongs: 11
	}
};

export default { races, horses, jockeys, trainers };
