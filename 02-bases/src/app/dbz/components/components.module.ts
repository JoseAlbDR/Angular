import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddFormComponent } from './add-form/add-form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AddFormComponent, ListComponent],
  imports: [CommonModule, FormsModule],
  exports: [AddFormComponent, ListComponent],
})
export class ComponentsModule {}
