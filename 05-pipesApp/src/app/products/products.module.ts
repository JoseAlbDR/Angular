import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { BasicsPageModule } from './pages/basics-page/basics-page.module';
import { NumbersPageModule } from './pages/numbers-page/numbers-page.module';
import { I18nSelectPipeComponent } from './pages/uncommon-page/components/i18n-pipes/i18n-select-pipe/i18n-select-pipe.component';
import { I18nPluralPipeComponent } from './pages/uncommon-page/components/i18n-pipes/i18n-plural-pipe/i18n-plural-pipe.component';
import { SlicePipeComponent } from './pages/uncommon-page/components/slice-pipe/slice-pipe.component';
import { JsonPipeComponent } from './pages/uncommon-page/components/json-pipe/json-pipe.component';
import { KeyValuePipeComponent } from './pages/uncommon-page/components/key-value-pipe/key-value-pipe.component';
import { AsyncPipeComponent } from './pages/uncommon-page/components/async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    I18nSelectPipeComponent,
    I18nPluralPipeComponent,
    SlicePipeComponent,
    JsonPipeComponent,
    KeyValuePipeComponent,
    AsyncPipeComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    BasicsPageModule,
    NumbersPageModule,
  ],
})
export class ProductsModule {}
