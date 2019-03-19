import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const base = 'https://revolt-a1b21.firebaseio.com/';
const json = '.json';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor(private readonly httpClient: HttpClient) { }

  getList<T>(url: string): Observable<Array<T>> {
    return this.httpClient.get<T>(base + url + json)
      .pipe(map((data: any) => this.dataToList<T>(data)));
  }


  dataToList<T>(data: any): Array<T> {
    const list = new Array<T>();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        list.push(data[key]);
      }
    }
    return list;
  }
}
