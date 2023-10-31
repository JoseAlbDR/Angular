import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private serviceUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  public searchBy(type: string, query: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `${this.serviceUrl}/${type}/${query}`
    );
  }
}
