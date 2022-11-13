
export enum ErezMode { A, B, C, None }

export interface Erez {
  _id: number;
  
  name: string;
  ip: string;
  asleep: boolean;
  mode: ErezMode;
  connected: boolean;
  
  ndpIp: string;
  ndpPort: number;
  
  sipIp: string;
  sipPort: number;
  
  channelA: number;
  multicastA: string;
  
  channelB: number;
  multicastB: string;
  
  multicastC: string;
  frequency: number;
}
