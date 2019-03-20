import { Injectable } from '@angular/core';

import { Beer } from './models/beer.interface';
import { ApiService } from '../core/api/api-helper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private api: ApiService) { }


  getBeers(): Observable<Array<Beer>> {
    return this.api.getList<Beer>('beers');
  }

  // getBeers(): Array<Beer> {
  //   return new Array(
  //     <Beer> { name: 'Simcoe Session', abv: 5.5, ibu: 47 },
  //     <Beer> { name: 'Uncrowned Session', abv: 5.5, ibu: 24 },
  //     <Beer> { name: 'Renaissance Saison', abv: 5.5, ibu: 24 },
  //     <Beer> { name: 'St. Sam\'s Porter', abv: 5.2, ibu: 29 },
  //     <Beer> { name: 'Vicarious Red', abv: 6.4, ibu: 56 }
  //   );
  // }
}
