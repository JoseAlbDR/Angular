import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchByComponent } from './components/search-by/search-by.component';
import { RouterModule } from '@angular/router';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { CountryMoreInfoComponent } from './components/country-more-info/country-more-info.component';
import { CountryInfoItemComponent } from './components/country-info-item/country-info-item.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryCardBodyComponent } from './components/country-card-body/country-card-body.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ],
})
export class CountriesModule {}
