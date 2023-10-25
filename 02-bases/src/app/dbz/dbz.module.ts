import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddFormComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
