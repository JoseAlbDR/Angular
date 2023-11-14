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
  public selectedLanguage: string = '';

  @Input()
  public content: string = this.translateService.instant(
    this.languageMap['linkContent'][this.langService.selectedLanguage]
  );

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;

      let content =
        this.content === 'Check Code' || this.content === 'Revisar Código'
          ? 'linkContent'
          : this.content === 'Check Pipe Code' ||
            this.content === 'Revisar Código Pipe'
          ? 'pipeContent'
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
