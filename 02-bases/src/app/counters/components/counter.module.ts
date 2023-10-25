import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CounterComponent],
  imports: [BrowserModule],
  exports: [CounterComponent],
})
export class CounterModule {}
