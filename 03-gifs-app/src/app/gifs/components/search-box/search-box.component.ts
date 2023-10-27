import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}
  @ViewChild('queryInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  public newSearch() {
    const newQuery = this.searchInput.nativeElement.value;

    this.gifsService.searchTag(newQuery);

    this.searchInput.nativeElement.value = '';
  }
}
