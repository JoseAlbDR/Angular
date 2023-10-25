import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroName: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
    'Blak Widow',
    'Ant Man',
  ];

  public deletedHero?: string;

  resetHeros(): void {
    this.heroName = [
      'Spiderman',
      'Ironman',
      'Hulk',
      'She Hulk',
      'Thor',
      'Blak Widow',
      'Ant Man',
    ];

    this.deletedHero = '';
  }

  deleteLastHero(): void {
    this.deletedHero = this.heroName.pop();
  }
}
