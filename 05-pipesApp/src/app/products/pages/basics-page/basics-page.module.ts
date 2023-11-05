import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipesComponent } from './components/date-pipes/date-pipes.component';
import { TextPipesComponent } from './components/text-pipes/text-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatePipesComponent, TextPipesComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [DatePipesComponent, TextPipesComponent],
})
export class BasicsPageModule {}
