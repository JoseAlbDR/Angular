import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [CardListComponent, SearchBoxComponent, CardItemComponent],
  imports: [CommonModule],
  exports: [CardListComponent, SearchBoxComponent],
})
export class ComponentsModule {}
