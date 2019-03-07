import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { HoursComponent } from './hours/hours.component';

@NgModule({
  declarations: [HoursComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  exports: [HoursComponent]
})
export class InfoModule { }
