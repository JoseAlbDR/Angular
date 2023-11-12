import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LangService } from '../lang.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [],
})
export class InfoComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(private langService: LangService) {}

  public languageMap = this.langService.infoLanguageMap;
  public selectedLanguaje = this.langService.getSelectedLanguage;

  ngOnInit(): void {
    this.languageSubscription = this.langService.languajeChanged.subscribe(
      (language: string) => {
        this.selectedLanguaje = language;
      }
    );
  }
}
