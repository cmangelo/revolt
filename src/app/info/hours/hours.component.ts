import { Component, OnInit } from '@angular/core';
import { DailyHours } from './models/daily-hours.interface';
import { InfoService } from '../info.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.less']
})
export class HoursComponent implements OnInit {
  dailyHours: Array<DailyHours>;

  constructor(private readonly infoService: InfoService) { }

  ngOnInit() {
    this.getHours();
  }

  getHours() {
    this.infoService.getHours()
      .pipe(map((data) => this.sortDays(data)))
      .subscribe((hours: Array<DailyHours>) => {
        this.dailyHours = hours;
      });
  }

  sortDays(data: Array<DailyHours>): Array<DailyHours> {
    const order = this.getSortOrder();
    return data.sort((a, b) => {
      const day1 = a.day.toLowerCase();
      const day2 = b.day.toLowerCase();
      return order[day1] < order[day2] ? -1 : order[day1] > order[day2] ? 1 : 0;
    });
  }

  getSortOrder(): any {
    return {
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6,
      'sunday': 7
    };
  }

}
