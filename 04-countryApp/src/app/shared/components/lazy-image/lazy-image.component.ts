import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = 'Gif Image';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
    this.hasLoaded = false;
  }

  public onLoad() {
    console.log('Image loaded');
    this.hasLoaded = true;
    console.log(this.hasLoaded);
  }
}
