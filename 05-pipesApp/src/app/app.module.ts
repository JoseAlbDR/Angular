import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

// Locale Config
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeDE from '@angular/common/locales/de';
import localeJA from '@angular/common/locales/ja';
import localeITA from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { InfoComponent } from './info/info.component';

registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);
registerLocaleData(localeJA);
registerLocaleData(localeDE);
registerLocaleData(localeITA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ProductsModule,
    PrimeNgModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'es-HN',
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
