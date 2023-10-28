import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gif-card-image',
  templateUrl: 'card-image.component.html',
})
export class CardImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = 'Gif Image';

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }
}
