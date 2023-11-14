import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleCasePipeComponent } from './components/toggle-case-pipe/toggle-case-pipe.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToggleCasePipeComponent, ToggleCasePipe],
  imports: [CommonModule, PrimeNgModule, SharedModule, FormsModule],
  exports: [ToggleCasePipeComponent],
})
export class CustomPageModule {}
