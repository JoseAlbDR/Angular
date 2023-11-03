import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../countries/interfaces/region.type';
import { IsLoadingService } from '../../../countries/services/is-loading.service';

@Component({
  selector: 'countries-button-search-by',
  templateUrl: './button-search-by.component.html',
  styleUrls: ['./button-search-by.component.css'],
})
export class SearchButtonComponent {
  constructor(private isLoadingService: IsLoadingService) {}

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

  isLoading$ = this.isLoadingService.isLoading$;
}
