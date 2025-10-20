// src/types/Device.ts
export interface Device {
  id: number;
  device: string;
  model: string;
  code: string;
  date: string;
  status: string;
  location: string;
  person?: string;
  comments?: string;
}
