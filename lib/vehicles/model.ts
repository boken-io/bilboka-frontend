export type Vehicles = Vehicle[];

export interface Vehicle {
  id: string;
  name: string;
  tegnkombinasjon: string;
  odometerUnit: string;
  fuelType: string;
  tankVolume: number;
  lastOdometer?: number;
  lastOdometerKilometers: any;
  lastYearlyDifference?: LastYearlyDifference;
  averageFuelConsumption?: AverageFuelConsumption;
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

export interface LastYearlyDifference {
  dateTime: string;
  odometer: any;
  odometerKilometers: any;
  amount: any;
  costNOK: any;
  priceNOK: any;
  isFullTank: any;
  estimatedConsumptionLitersPer10Km: any;
  estimatedRemainingFuel: any;
  averageKilometersPerDay: any;
  sourceEntryFirst: SourceEntryFirst;
  sourceEntryLast: SourceEntryLast;
}

export interface SourceEntryFirst {
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

export interface SourceEntryLast {
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

export interface AverageFuelConsumption {
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
  sourceEntryFirst: SourceEntryFirst2;
  sourceEntryLast: SourceEntryLast2;
}

export interface SourceEntryFirst2 {
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

export interface SourceEntryLast2 {
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
