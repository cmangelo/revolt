import { Injectable } from '@angular/core';
import { ApiService } from '../core/api/api-helper.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private readonly api: ApiService) { }

  registerEmail(email: string): Observable<boolean> {
    return of(false);
  }
}
