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
  public type!: string;

  public languageMap!: {
    [key: string]: { [key: string]: string };
  };

  public selectedLanguage = this.langService.selectedLanguage;

  public message =
    this.langService.infoLanguageMap['button']['link']['message'];

  ngOnInit(): void {
    this.message =
      this.langService.infoLanguageMap['button']['link'][this.selectedLanguage];
    this.languageMap = this.langService.infoLanguageMap[this.type];

    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
      this.languageMap = this.langService.infoLanguageMap[this.type];
    });
  }
}
