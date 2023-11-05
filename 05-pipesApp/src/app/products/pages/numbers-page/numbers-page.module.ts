import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericPipesComponent } from './components/numeric-pipes/numeric-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';

@NgModule({
  declarations: [NumericPipesComponent, NumericInputComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [NumericPipesComponent],
})
export class NumbersPageModule {}
