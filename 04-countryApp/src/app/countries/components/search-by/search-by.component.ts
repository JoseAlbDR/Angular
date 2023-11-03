import { Component, Input, OnInit } from '@angular/core';

import { Country, TermCountries, Region } from '../../interfaces';

import { CountriesService } from '../../services/countries.service';
import { IsLoadingService } from '../../services/is-loading.service';

@Component({
  selector: 'countries-search-by',
  templateUrl: './search-by.component.html',
})
export class SearchByComponent implements OnInit {
  public countries: Country[] = [];
  public activeRegion?: Region;
  public initialValue: string = '';

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(
    private countriesService: CountriesService,
    private isLoadingService: IsLoadingService
  ) {}

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

  public errorMsg: string = '';

  searchBy(term: string): void {
    if (term === '') return;
    this.initialValue = term;
    this.isLoadingService.setIsLoadingSearch(true);
    this.activeRegion = term as Region;

    const type = this.type.toLowerCase();
    const data = this.countriesService.searchBy(type, term);
    data.subscribe({
      next: (countries) => {
        this.isLoadingService.setIsLoadingSearch(false);
        this.countries = countries;
        this.errorMsg = '';
      },
      error: (error) => {
        this.isLoadingService.setIsLoadingSearch(false);
        this.countries = [];
        this.errorMsg = error.message;
      },
    });
  }
}
