import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private serviceUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {}

  public searchBy(type: string, term: string): Observable<Country[]> {
    const url: string = `${this.serviceUrl}/${type}/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
      tap((countries) => {
        console.log(type);
        if (type === 'capital') {
          this.cacheStore.byCapital = { term, countries };
        }
        if (type === 'name') {
          this.cacheStore.byCountry = { term, countries };
        }
        if (type === 'region') {
          this.cacheStore.byRegion = { region: term as Region, countries };
        }
        console.log(this.cacheStore);
      })
      // delay(2000)
    );
  }
}
