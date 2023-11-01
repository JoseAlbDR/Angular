import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-country-info-item',
  templateUrl: './country-info-item.component.html',
  styles: [],
})
export class CountryInfoItemComponent {
  @Input()
  public name: string = '';

  @Input()
  public content: string | null = null;

  @Input()
  public link: string | null = null;
}
