import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent {
  @Input()
  public country?: Country;

  public getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }

  public getObjectValues(obj: { [key: string]: string }) {
    return Object.values(obj);
  }
}
