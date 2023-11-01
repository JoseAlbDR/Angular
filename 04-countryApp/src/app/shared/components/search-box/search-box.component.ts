import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('queryInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Input()
  public disabled: boolean = false;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  emitQuery(value: string): void {
    if (value === '') return;

    this.onSearch.emit(value);

    this.searchInput.nativeElement.value = '';
  }
}
