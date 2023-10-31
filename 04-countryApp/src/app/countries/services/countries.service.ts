import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  public countriesList: Country[] = [];

  private serviceUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  public searchQuery(query: string, type: string): void {
    this.httpClient
      .get<Country[]>(`${this.serviceUrl}/${type}/${query}`)
      .subscribe((resp) => {
        this.countriesList = resp;
      });
  }
}
