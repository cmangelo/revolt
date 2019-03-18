import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { BeersComponent } from './beers.component';

@NgModule({
  declarations: [BeersComponent],
  imports: [
    CommonModule,
    BeersRoutingModule
  ],
  exports: [BeersComponent]
})
export class BeersModule { }
