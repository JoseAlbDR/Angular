import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipesComponent } from './components/date-pipes/date-pipes.component';
import { TextPipesComponent } from './components/text-pipes/text-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { DatePipesLocaleComponent } from './components/date-pipes-locale/date-pipes-locale.component';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [
    DatePipesComponent,
    TextPipesComponent,
    DatePipesLocaleComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule, HighlightJsModule],
  exports: [DatePipesComponent, TextPipesComponent, DatePipesLocaleComponent],
})
export class BasicsPageModule {}
