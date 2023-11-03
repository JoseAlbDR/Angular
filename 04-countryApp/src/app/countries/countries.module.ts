import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule, CountriesRoutingModule, PagesModule],
})
export class CountriesModule {}
