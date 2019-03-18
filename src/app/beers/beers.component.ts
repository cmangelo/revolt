import { Component, OnInit } from '@angular/core';

import { BeersService } from './beers.service';
import { Beer } from './models/beer.interface';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.less']
})
export class BeersComponent implements OnInit {
  beers: Array<Beer>;

  constructor(private readonly beerService: BeersService) { }

  ngOnInit() {
    this.beers = this.beerService.getBeers();
  }

}
