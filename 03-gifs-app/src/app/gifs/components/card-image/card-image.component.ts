import { Component, Input } from '@angular/core';

@Component({
  selector: 'gif-card-image',
  templateUrl: 'card-image.component.html',
})
export class CardImageComponent {
  @Input()
  public url!: string;
  public title!: string;
}
