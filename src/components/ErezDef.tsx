export enum ErezStatus {
  asleep,
  awake,
}

export interface Erez {
  id: number;
  name: string;
  status: ErezStatus;
}