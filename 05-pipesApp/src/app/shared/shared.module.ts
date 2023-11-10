import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { CheckCodeBtnComponent } from './components/check-code-btn/check-code-btn.component';

@NgModule({
  declarations: [MenuComponent, CheckCodeBtnComponent],
  imports: [CommonModule, PrimeNgModule, RouterModule],
  exports: [MenuComponent, CheckCodeBtnComponent],
})
export class SharedModule {}
