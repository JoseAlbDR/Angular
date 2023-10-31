import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    const data = this.countriesService.searchQuery(term, 'capital');
    data.subscribe((resp) => (this.countries = resp));
  }
}
