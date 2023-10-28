import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

const GIPHY_API_KEY = 'fmVyq1YAuR1lIk2C04153599hBoLOjw6';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this._tagsHistory = this.loadLocalStorage();

    this.searchTag(this._tagsHistory?.[0] || '');
  }

  get tagsHistory(): string[] {
    return this._tagsHistory ? [...this._tagsHistory] : [];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('tagHistory')) return;

    const history = JSON.parse(localStorage.getItem('tagHistory')!) || [];

    return history;
  }

  public searchTag(tag: string): void {
    if (tag === '') return;

    this.organizeHistory(tag);
    this.saveLocalStorage();

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', 10);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }

  public deleteTag(tag: string): void {
    this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    this.saveLocalStorage();
  }
}
