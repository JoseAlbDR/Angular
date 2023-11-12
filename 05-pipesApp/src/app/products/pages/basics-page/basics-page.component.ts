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

  public languageMap = this.langService.basicPipesMap;
  public selectedLanguage = this.langService.selectedLanguage;

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
