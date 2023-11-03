import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces';

@Component({
  selector: 'countries-country-card',
  templateUrl: './country-card.component.html',
  styles: [],
})
export class CountryCardComponent implements OnInit {
  @Input()
  public country!: Country;

  @Input()
  public index!: number;

  ngOnInit(): void {
    if (!this.country) return;
    if (!this.index) return;
  }
}
