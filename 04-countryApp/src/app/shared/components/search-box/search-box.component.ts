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

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  searchByCapital(): void {
    const term: string = this.searchInput.nativeElement.value;

    if (term === '') return;

    this.onSearch.emit(term);

    this.searchInput.nativeElement.value = '';
  }
}
