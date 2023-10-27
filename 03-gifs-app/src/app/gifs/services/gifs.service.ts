import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public searchTag(tag: string): void {
    if (tag === '') return;

    this._tagsHistory.unshift(tag);
  }
}
