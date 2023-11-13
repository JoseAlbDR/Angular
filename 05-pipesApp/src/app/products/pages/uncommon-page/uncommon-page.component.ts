import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent implements OnInit {
  public clients: string[] = [
    'Maria',
    'Peter',
    'John',
    'Michael',
    'Ed',
    'Melissa',
    'Natalie',
  ];

  public person = { name: 'Michael', age: 39, address: '13 Rue del Perdebe' };
  public isCollapsed = true;

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
      this.languageMap = this.langService.uncommonPipesMap;
    });
  }

  public selectedLanguage = this.langService.selectedLanguage;
  public languageMap = this.langService.uncommonPipesMap;

  restoreClients(): void {
    this.clients = [
      'Maria',
      'Peter',
      'John',
      'Michael',
      'Ed',
      'Melissa',
      'Natalie',
    ];
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
