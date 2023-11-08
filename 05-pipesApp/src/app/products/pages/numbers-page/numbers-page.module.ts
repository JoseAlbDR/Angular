import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { NumberPipeComponent } from './components/numeric-pipes/components/number-pipe/number-pipe.component';
import { PercentageComponent } from './components/numeric-pipes/components/percentage/percentage.component';
import { CurrencyPipeComponent } from './components/numeric-pipes/components/currency-pipe/currency-pipe.component';

@NgModule({
  declarations: [
    NumericInputComponent,
    NumberPipeComponent,
    PercentageComponent,
    CurrencyPipeComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [NumberPipeComponent, PercentageComponent, CurrencyPipeComponent],
})
export class NumbersPageModule {}
