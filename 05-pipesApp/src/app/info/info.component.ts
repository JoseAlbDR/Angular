import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LangService } from '../lang.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  constructor(private langService: LangService) {}

  public languageMap = this.langService.infoLanguageMap;
  public selectedLanguage = this.langService.getSelectedLanguage;

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }
}
