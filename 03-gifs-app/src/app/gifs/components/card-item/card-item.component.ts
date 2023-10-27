import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './card-item.component.html',
})
export class CardItemComponent {
  @Input()
  public gif!: Gif;
}
