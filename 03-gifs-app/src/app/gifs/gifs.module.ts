import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';

import { HomePageComponent } from './pages/home/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
