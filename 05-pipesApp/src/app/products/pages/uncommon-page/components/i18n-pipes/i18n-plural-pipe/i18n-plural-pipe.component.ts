import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'uncommon-i18n-plural-pipe',
  templateUrl: './i18n-plural-pipe.component.html',
  styles: [],
})
export class I18nPluralPipeComponent implements OnInit {
  @Input()
  public clients: string[] = [];

  @Input()
  public isCollapsed!: boolean;

  @Output()
  public onRestorePluralClients: EventEmitter<void> = new EventEmitter();

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
      this.clientsMap =
        this.langService.uncommonPipesMap.i18nPlural.clientsMap[
          this.selectedLanguage
        ];
      this.content =
        this.langService.uncommonPipesMap.i18nPlural.content[
          this.selectedLanguage
        ];
    });
  }

  public languageMap = this.langService.uncommonPipesMap.i18nPlural;
  public selectedLanguage = this.langService.selectedLanguage;

  public content: string =
    this.langService.uncommonPipesMap.i18nPlural.content[this.selectedLanguage];
  public clientsMap =
    this.langService.uncommonPipesMap.i18nPlural.clientsMap[
      this.selectedLanguage
    ];

  deleteClient(client = ''): void {
    if (client) {
      this.clients = this.clients.filter((name) => client !== name);
    } else {
      this.clients.pop();
    }
  }

  restoreClients(): void {
    this.onRestorePluralClients.emit();
  }

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
