import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { I18nPluralPipeComponent } from './components/i18n-pipes/i18n-plural-pipe/i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from './components/i18n-pipes/i18n-select-pipe/i18n-select-pipe.component';
import { JsonPipeComponent } from './components/json-pipe/json-pipe.component';
import { KeyValuePipeComponent } from './components/key-value-pipe/key-value-pipe.component';
import { SlicePipeComponent } from './components/slice-pipe/slice-pipe.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AsyncPipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    JsonPipeComponent,
    KeyValuePipeComponent,
    SlicePipeComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule, SharedModule],
  exports: [
    AsyncPipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    JsonPipeComponent,
    KeyValuePipeComponent,
    SlicePipeComponent,
  ],
})
export class UncommonPageModule {}
