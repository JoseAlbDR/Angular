import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangService } from 'src/app/lang.service';
import { ThemeService } from 'src/app/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public currentTheme: string = this.themeService.getCurrentTheme;
  public lightTheme: boolean = this.currentTheme === 'soho-light';

  constructor(
    private themeService: ThemeService,
    private langService: LangService,
    private translateService: TranslateService
  ) {}

  private selectedLanguage: string = this.langService.getSelectedLanguage;
  private languageMap = this.langService.menuLanguageMap;
  public items: MenuItem[] = this.renderMenu();

  changeTheme(theme: string) {
    theme === 'soho-light'
      ? (this.lightTheme = true)
      : (this.lightTheme = false);
    this.themeService.switchTheme(theme);
  }

  setLanguage(value: string) {
    this.langService.setSelectedLanguage = value;
  }

  private translate(item: string) {
    return this.translateService.instant(
      this.languageMap[item][this.selectedLanguage]
    );
  }

  renderMenu(lang = 'en') {
    this.selectedLanguage = lang;

    const title = this.translate('title');
    const textDate = this.translate('textDates');
    const numbers = this.translate('numbers');
    const uncommon = this.translate('uncommon');
    const custom = this.translate('custom');

    const items = [
      {
        label: title,
        icon: 'pi pi-desktop',
        items: [
          {
            label: textDate,
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: numbers,
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: uncommon,
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: custom,
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Another element',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];

    return items;
  }

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.items = this.renderMenu(language);
    });
  }
}
