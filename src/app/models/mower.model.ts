export interface Mower {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    status: string;
    lastActive: Date;
    batteryLevel: number;
    isSelected: boolean;
  }