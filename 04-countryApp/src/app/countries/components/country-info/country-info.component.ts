import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent implements OnInit {
  @Input()
  public country?: Country;

  @Input()
  public isLoading: boolean = false;

  ngOnInit(): void {
    if (!this.country) return;
  }
}
