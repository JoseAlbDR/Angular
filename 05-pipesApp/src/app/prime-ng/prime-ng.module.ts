import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [ButtonModule, MenuModule],
})
export class PrimeNgModule {}
