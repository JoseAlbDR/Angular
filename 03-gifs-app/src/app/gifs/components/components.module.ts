import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [CardListComponent, SearchBoxComponent],
  imports: [CommonModule],
  exports: [CardListComponent, SearchBoxComponent],
})
export class ComponentsModule {}
