import { Component, Input, OnInit } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  constructor(private langService: LangService) {}

  @Input()
  public type: string = '';

  public languageMap =
    this.type === 'common'
      ? this.langService.infoLanguageMap.common
      : this.langService.infoLanguageMap.custom;
  public selectedLanguage = this.langService.selectedLanguage;

  public message: string =
    this.langService.infoLanguageMap.link[this.langService.selectedLanguage];

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
      this.languageMap =
        this.type === 'common'
          ? this.langService.infoLanguageMap.common
          : this.langService.infoLanguageMap.custom;
    });
  }
}
