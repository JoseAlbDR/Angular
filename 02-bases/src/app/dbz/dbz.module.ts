import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
