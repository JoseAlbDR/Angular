import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleCasePipeComponent } from './components/toggle-case-pipe/toggle-case-pipe.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';

@NgModule({
  declarations: [ToggleCasePipeComponent, ToggleCasePipe],
  imports: [CommonModule, PrimeNgModule, SharedModule],
  exports: [ToggleCasePipeComponent],
})
export class CustomPageModule {}
