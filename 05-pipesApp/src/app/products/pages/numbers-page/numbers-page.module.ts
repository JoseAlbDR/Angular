import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { NumericInputComponent } from './shared/numeric-input/numeric-input.component';
import { NumberPipeComponent } from './components/numeric-pipes/components/number-pipe/number-pipe.component';
import { PercentageComponent } from './components/numeric-pipes/components/percentage/percentage.component';
import { CurrencyPipeComponent } from './components/numeric-pipes/components/currency-pipe/currency-pipe.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    NumericInputComponent,
    NumberPipeComponent,
    PercentageComponent,
    CurrencyPipeComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule, SharedModule],
  exports: [
    NumberPipeComponent,
    PercentageComponent,
    CurrencyPipeComponent,
    NumericInputComponent,
  ],
})
export class NumbersPageModule {}
