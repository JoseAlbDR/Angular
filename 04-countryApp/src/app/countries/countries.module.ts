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

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    SearchByComponent,
    CountryDetailComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule, RouterModule],
})
export class CountriesModule {}
