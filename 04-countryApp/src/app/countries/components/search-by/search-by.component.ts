import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.css'],
})
export class SearchByComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public activeRegion?: Region;

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  @Input()
  public type: string = '';

  searchBy(term: string): void {
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
