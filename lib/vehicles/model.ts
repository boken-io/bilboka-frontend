export type { Vehicle, Vehicles, Entry, Entries, Datapoint, Datapoints };

type Vehicles = Vehicle[];
type Entries = Entry[];
type Datapoints = Datapoint[];

interface Vehicle {
  id: string;
  name: string;
  tegnkombinasjonNormalisert: string;
  tegnkombinasjonVisning: string;
  odometerUnit: string;
  fuelType: string;
  tankVolume: number;
  lastOdometer?: number;
  lastOdometerKilometers: any;
  lastYearlyDifference?: Datapoint;
  averageFuelConsumption?: Datapoint;
  entriesCount: number;
  understellsnummer?: string;
  regStatus: string;
  sistePKK?: string;
  fristPKK?: string;
  regBevaringsverdig: boolean;
  egenvekt?: number;
  nyttelast?: number;
  hengervektMBrems?: number;
  lengde?: number;
}

interface Entry {
  id: string;
  type: string;
  dateTime: string;
  odometer: number;
  odometerKilometers: number;
  amount: number;
  costNOK: number;
  isFullTank: any;
  maintenanceItem: any;
  event: any;
  comment: any;
}

interface Datapoint {
  dateTime: string;
  odometer: any;
  odometerKilometers: any;
  amount: any;
  costNOK: any;
  priceNOK: any;
  isFullTank: any;
  estimatedConsumptionLitersPer10Km: number;
  estimatedRemainingFuel: any;
  averageKilometersPerDay: any;
  sourceEntryFirst: Entry;
  sourceEntryLast: Entry;
}
