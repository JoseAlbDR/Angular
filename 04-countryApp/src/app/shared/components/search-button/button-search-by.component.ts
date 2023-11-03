import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../countries/interfaces/region.type';
import { CountriesService } from '../../../countries/services/countries.service';
import { Country } from '../../../countries/interfaces/country.interface';

@Component({
  selector: 'countries-button-search-by',
  templateUrl: './button-search-by.component.html',
})
export class SearchButtonComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;

  @Output()
  onClick: EventEmitter<Region> = new EventEmitter();

  @Input()
  public regions: Region[] = [];

  @Input()
  public activeRegion?: Region;

  @Input()
  public initialValue?: String;

  @Input()
  public type: string = '';

  emitQuery(value: Region): void {
    this.onClick.emit(value);
  }
}
