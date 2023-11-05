import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericPipesComponent } from './numeric-pipes/numeric-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NumericPipesComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [NumericPipesComponent],
})
export class NumbersPageModule {}
