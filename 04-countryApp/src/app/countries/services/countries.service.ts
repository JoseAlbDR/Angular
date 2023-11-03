import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

import _ from 'lodash';

import { Region, CacheStore, Country } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private serviceUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byName: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {}

  public searchBy(type: string, term: string): Observable<Country[]> {
    const url: string = `${this.serviceUrl}/${type}/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
      tap((countries) => {
        this.cacheStore[`by${_.capitalize(type)}`] =
          type === 'region'
            ? { region: term as Region, countries }
            : { term, countries };
      })
      // delay(2000)
    );
  }
}
