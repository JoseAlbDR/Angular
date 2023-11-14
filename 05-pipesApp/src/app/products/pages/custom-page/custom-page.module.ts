import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipesComponent } from './components/toggle-case-pipe/custom-pipes.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';
import { FormsModule } from '@angular/forms';
import { CanFlyPipe } from '../pipes/can-fly.pipe';

@NgModule({
  declarations: [CustomPipesComponent, ToggleCasePipe, CanFlyPipe],
  imports: [CommonModule, PrimeNgModule, SharedModule, FormsModule],
  exports: [CustomPipesComponent],
})
export class CustomPageModule {}
