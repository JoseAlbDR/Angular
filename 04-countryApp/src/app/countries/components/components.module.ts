import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { CountryCardBodyComponent } from './country-card-body/country-card-body.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CountryInfoItemComponent } from './country-info-item/country-info-item.component';
import { CountryMoreInfoComponent } from './country-more-info/country-more-info.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { SearchByComponent } from './search-by/search-by.component';

@NgModule({
  declarations: [
    CountryCardBodyComponent,
    CountryCardComponent,
    CountryDetailComponent,
    CountryInfoComponent,
    CountryInfoItemComponent,
    CountryMoreInfoComponent,
    CountryTableComponent,
    SearchByComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    CountryCardBodyComponent,
    CountryCardComponent,
    CountryDetailComponent,
    CountryInfoComponent,
    CountryInfoItemComponent,
    CountryMoreInfoComponent,
    CountryTableComponent,
    SearchByComponent,
  ],
})
export class ComponentsModule {}
