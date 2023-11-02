import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private serviceUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  public searchBy(type: string, query: string): Observable<Country[]> {
    const url: string = `${this.serviceUrl}/${type}/${query}`;

    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }
}
