export interface SholatScheduleResponse {
  status: boolean;
  data: SholatSchedule;
  message?: string;
}

export interface SholatSchedule {
  id: string;
  lokasi: string;
  daerah: string;
  koordinat: Coordinat;
  jadwal: Schedule;
}

export interface Coordinat {
  lat: number;
  lon: number;
  lintang: string;
  bujur: string;
}

export interface Schedule {
  tanggal: string;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
  date: string;
}
