import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsLoadingService } from 'src/app/countries/services/is-loading.service';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit, OnDestroy {
  constructor(private isLoadingService: IsLoadingService) {}

  @Input()
  public url!: string;

  @Input()
  public alt: string = 'Gif Image';

  @Input()
  public isLoadingImage: boolean = false;

  isLoadingImage$ = this.isLoadingService.isLoadingImage$;

  ngOnInit(): void {
    // if (!this.url) throw new Error('URL property is required');
    this.isLoadingService.setIsLoadingImage(false);
  }

  ngOnDestroy(): void {
    this.isLoadingService.setIsLoadingImage(false);
  }

  public onLoad() {
    this.isLoadingService.setIsLoadingImage(true);
  }
}
