import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent implements OnInit {
  public isCollapsed: boolean = true;

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  public languageMap = this.langService.basicPipesMap;
  public selectedLanguage = this.langService.getSelectedLanguage;

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
