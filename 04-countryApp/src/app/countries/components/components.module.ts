import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryCardBodyComponent } from './country-card-body/country-card-body.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CountryInfoItemComponent } from './country-info-item/country-info-item.component';
import { CountryMoreInfoComponent } from './country-more-info/country-more-info.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { SearchByComponent } from './search-by/search-by.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CountryCardComponent,
    CountryCardBodyComponent,
    CountryDetailComponent,
    CountryInfoComponent,
    CountryInfoItemComponent,
    CountryMoreInfoComponent,
    CountryTableComponent,
    SearchByComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    CountryCardComponent,
    CountryCardBodyComponent,
    CountryDetailComponent,
    CountryInfoComponent,
    CountryInfoItemComponent,
    CountryMoreInfoComponent,
    CountryTableComponent,
    SearchByComponent,
  ],
})
export class ComponentsModule {}
