import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: [],
})
export class CustomPageComponent implements OnInit {
  public isCollapsed: boolean = true;

  constructor(private langService: LangService) {}

  public languageMap = this.langService.customPipesMap;
  public selectedLanguage = this.langService.selectedLanguage;

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
