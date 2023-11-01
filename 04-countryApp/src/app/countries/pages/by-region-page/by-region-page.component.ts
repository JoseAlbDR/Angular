import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchByRegion(term: string): void {
    const data = this.countriesService.searchBy('region', term);
    data.subscribe((countries) => (this.countries = countries));
  }
}
