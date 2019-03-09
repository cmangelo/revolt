import { Injectable } from '@angular/core';
import { DailyHours } from './hours/models/daily-hours.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getHours(): Array<DailyHours> {
    return new Array(
      <DailyHours>{ day: 'Monday', closed: true },
      <DailyHours>{ day: 'Tuesday', closed: true },
      <DailyHours>{ day: 'Wednesday', openTime: '3:30pm', closeTime: '10pm' },
      <DailyHours>{ day: 'Thursday', openTime: '3:30pm', closeTime: '10pm' },
      <DailyHours>{ day: 'Friday', openTime: '3:30pm', closeTime: '10pm' },
      <DailyHours>{ day: 'Saturday', openTime: '1pm', closeTime: '10pm' },
      <DailyHours>{ day: 'Sunday', openTime: '1pm', closeTime: '8pm' },
    );
  }
}
