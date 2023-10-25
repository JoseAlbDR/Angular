import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [BrowserModule],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
