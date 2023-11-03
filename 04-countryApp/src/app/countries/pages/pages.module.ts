import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ByCapitalPageComponent } from './by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './by-region-page/by-region-page.component';
import { CountryPageComponent } from './country-page/country-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, ComponentsModule],
  exports: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
  ],
})
export class PagesModule {}
