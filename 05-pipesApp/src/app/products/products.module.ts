import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { TextPipesComponent } from './pages/basics-page/components/text-pipes/text-pipes.component';
import { DatePipesComponent } from './pages/basics-page/components/date-pipes/date-pipes.component';
import { BasicsPageModule } from './pages/basics-page/basics-page.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    BasicsPageModule,
  ],
})
export class ProductsModule {}
