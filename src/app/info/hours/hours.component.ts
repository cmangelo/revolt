import { Component, OnInit } from '@angular/core';
import { DailyHours } from './models/daily-hours.interface';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.less']
})
export class HoursComponent implements OnInit {
  dailyHours: Array<DailyHours>;

  constructor(private readonly infoService: InfoService) { }

  ngOnInit() {
    this.dailyHours = this.infoService.getHours();
  }

}
