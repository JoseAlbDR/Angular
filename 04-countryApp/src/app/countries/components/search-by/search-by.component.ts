import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { TermCountries } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'countries-search-by',
  templateUrl: './search-by.component.html',
})
export class SearchByComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public activeRegion?: Region;
  public initialValue: string = '';

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries =
      this.countriesService.cacheStore[`by${this.type}`].countries;
    this.initialValue =
      this.type === 'Region'
        ? this.countriesService.cacheStore.byRegion.region!
        : (this.countriesService.cacheStore[`by${this.type}`] as TermCountries)
            .term;
  }

  @Input()
  public type: string = '';

  searchBy(term: string): void {
    this.initialValue = term;
    this.isLoading = true;
    this.activeRegion = term as Region;

    const type = this.type.toLowerCase();
    const data = this.countriesService.searchBy(type, term);
    data.subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }
}
