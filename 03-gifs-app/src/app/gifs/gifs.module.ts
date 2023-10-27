import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
