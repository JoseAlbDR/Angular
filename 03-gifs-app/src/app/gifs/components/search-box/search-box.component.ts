import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('queryInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onNewSearch = new EventEmitter<string>();

  public newSearch() {
    const newQuery = this.searchInput.nativeElement.value;

    this.onNewSearch.emit(newQuery);

    this.searchInput.nativeElement.value = '';
  }
}
