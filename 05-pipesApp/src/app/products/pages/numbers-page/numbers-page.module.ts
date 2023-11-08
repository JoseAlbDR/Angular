import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericPipesComponent } from './components/numeric-pipes/numeric-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { NumberPipeComponent } from './components/numeric-pipes/components/number-pipe/number-pipe.component';
import { PercentageComponent } from './components/numeric-pipes/components/percentage/percentage.component';

@NgModule({
  declarations: [
    NumericPipesComponent,
    NumericInputComponent,
    NumberPipeComponent,
    PercentageComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [NumericPipesComponent, NumberPipeComponent],
})
export class NumbersPageModule {}
