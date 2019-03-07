import { Injectable } from '@angular/core';
import { DailyHours } from './hours/models/daily-hours.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getHours(): Array<DailyHours> {
    return new Array(
      <DailyHours>{ day: 'Monday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Tuesday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Wednesday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Thursday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Friday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Saturday', openTime: '12pm', closeTime: '8pm' },
      <DailyHours>{ day: 'Sunday', openTime: '12pm', closeTime: '8pm' },
    );
  }
}
