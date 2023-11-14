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
import { SharedModule } from '../shared/shared.module';
import { UncommonPageModule } from './pages/uncommon-page/uncommon-page.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    BasicsPageModule,
    NumbersPageModule,
    UncommonPageModule,
    SharedModule,
  ],
})
export class ProductsModule {}
