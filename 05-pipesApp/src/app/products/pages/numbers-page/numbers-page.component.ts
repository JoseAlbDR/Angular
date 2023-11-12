import { Component, OnInit } from '@angular/core';
import { NumericEvent } from './components/numeric-pipes/interfaces/numeric-event.type';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
})
export class NumbersPageComponent implements OnInit {
  public isCollapsed: boolean = true;

  constructor(private langService: LangService) {}

  public selectedLanguage: string = this.langService.selectedLanguage;
  public languageMap = this.langService.numberPipesMap;

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
