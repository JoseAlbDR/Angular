import { Component, Input } from '@angular/core';

@Component({
  selector: 'gif-card-image',
  template: `<img [src]="url" [alt]="title" class="card-img-top" />`,
})
export class CardImageComponent {
  @Input()
  public url!: string;
  public title!: string;
}
