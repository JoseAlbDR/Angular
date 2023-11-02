import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-more-info',
  templateUrl: './country-more-info.component.html',
  styles: [],
})
export class CountryMoreInfoComponent implements OnInit {
  @Input()
  public country?: Country;

  ngOnInit(): void {
    if (!this.country) return;
  }

  public getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }

  public getObjectValues(obj: { [key: string]: string }) {
    return Object.values(obj);
  }
}
