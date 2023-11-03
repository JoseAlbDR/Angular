import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces';

@Component({
  selector: 'app-country-card-body',
  templateUrl: './country-card-body.component.html',
  styles: [],
})
export class CountryCardBodyComponent {
  @Input()
  public country!: Country;

  @Input()
  public index!: number;

  ngOnInit(): void {
    if (!this.country) return;
    if (!this.index) return;
  }
}
