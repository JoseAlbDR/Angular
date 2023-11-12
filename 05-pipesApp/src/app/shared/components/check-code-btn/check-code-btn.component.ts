import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'shared-check-code-btn',
  templateUrl: './check-code-btn.component.html',
  styles: [],
})
export class CheckCodeBtnComponent implements OnInit {
  @Input()
  public url: string = '';

  constructor(
    private langService: LangService,
    private translateService: TranslateService
  ) {}

  public languageMap = this.langService.linkButtonsMap;
  public selectedLanguage = this.langService.selectedLanguage;

  @Input()
  public content: string = this.translateService.instant(
    this.languageMap['linkContent']['en']
  );

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      const content =
        this.content === 'Check Code' || this.content === 'Revisar Código'
          ? 'linkContent'
          : 'infoContent';
      this.content = this.translateService.instant(
        this.languageMap[content][language]
      );
    });
  }

  redirect() {
    window.open(this.url, '_blank');
  }
}
