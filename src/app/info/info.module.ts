import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { HoursComponent } from './hours/hours.component';
import { InfoComponent } from './info.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [HoursComponent, InfoComponent, SummaryComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  exports: [InfoComponent]
})
export class InfoModule { }
