import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

import _ from 'lodash';

import { Region, CacheStore, Country } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private serviceUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byName: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  public searchBy(type: string, term: string): Observable<Country[]> {
    const url: string = `${this.serviceUrl}/${type}/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          type = type === 'name' ? 'country' : type;
          throw new Error(`${type} ${term} not found try another ${type}`);
        } else {
          return of([]);
        }
      }),
      tap((countries) => {
        this.cacheStore[`by${_.capitalize(type)}`] =
          type === 'region'
            ? { region: term as Region, countries }
            : { term, countries };
      }),
      tap(() => this.saveToLocalStorage())
      // delay(2000)
    );
  }
}
