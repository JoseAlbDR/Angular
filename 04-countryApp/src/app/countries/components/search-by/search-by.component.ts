import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-search-by',
  templateUrl: './search-by.component.html',
  styles: [],
})
export class SearchByComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  @Input()
  public type: string = '';

  searchBy(term: string): void {
    const type = this.type.toLowerCase();
    const data = this.countriesService.searchBy(type, term);
    data.subscribe((countries) => (this.countries = countries));
  }
}
