import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-info',
  templateUrl: './country-info.component.html',
  styles: [],
})
export class CountryInfoComponent implements OnInit {
  @Input()
  public country?: Country;

  ngOnInit(): void {
    if (!this.country) return;
  }
}
