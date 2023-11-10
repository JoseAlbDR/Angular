import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private currentTheme: string = 'soho-light';

  get getCurrentTheme(): string {
    return this.currentTheme;
  }

  switchTheme(theme: string) {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    console.log(theme);
    if (themeLink) {
      themeLink.href = theme + '.css';
      this.currentTheme = theme;
    }
  }
}
