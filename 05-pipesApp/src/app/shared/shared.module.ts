import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { CheckCodeBtnComponent } from './components/check-code-btn/check-code-btn.component';
import { ToggleCollapsedComponent } from './components/toggle-collapsed/toggle-collapsed.component';

@NgModule({
  declarations: [
    MenuComponent,
    CheckCodeBtnComponent,
    ToggleCollapsedComponent,
  ],
  imports: [CommonModule, PrimeNgModule, RouterModule],
  exports: [MenuComponent, CheckCodeBtnComponent, ToggleCollapsedComponent],
})
export class SharedModule {}
