import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, delay, of } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private serviceUrl: string = 'https://restcountries.com/v3.1';
  public casheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    console.log('Countries Service Init');
  }

  public searchBy(type: string, query: string): Observable<Country[]> {
    const url: string = `${this.serviceUrl}/${type}/${query}`;

    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }
}
