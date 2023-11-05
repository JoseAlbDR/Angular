import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    // MenuModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
