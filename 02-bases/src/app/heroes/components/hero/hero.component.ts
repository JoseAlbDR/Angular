import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return _.capitalize(this.name);
  }

  private getHeroDescription(): string {
    return `${this.capitalizedName} ${this.age}`;
  }

  get heroDescription(): string {
    return this.getHeroDescription();
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 33;
  }

  resetPage(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
