import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private currentTheme: string = localStorage.getItem('theme') || 'soho-light';

  get getCurrentTheme(): string {
    return this.currentTheme;
  }

  set setCurrentTheme(value: string) {
    this.currentTheme = value;
  }

  switchTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
      this.currentTheme = theme;
    }
  }
}
