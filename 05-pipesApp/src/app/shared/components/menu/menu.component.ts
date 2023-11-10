import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];
  public currentTheme: string = this.themeService.getCurrentTheme;
  public lightTheme: boolean = this.currentTheme === 'soho-light';

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    theme === 'soho-light'
      ? (this.lightTheme = true)
      : (this.lightTheme = false);
    this.themeService.switchTheme(theme);
    console.log(this.themeService.getCurrentTheme);
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Another element',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
