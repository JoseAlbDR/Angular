import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'shared-toggle-collapsed',
  templateUrl: './toggle-collapsed.component.html',
  styles: [],
})
export class ToggleCollapsedComponent implements OnInit {
  public isCollapsed: boolean = true;

  @Output()
  public togglePanel: EventEmitter<boolean> = new EventEmitter();

  constructor(private langService: LangService) {}

  public selectedLanguage = this.langService.getSelectedLanguage;
  public languageMap = this.langService.openButtonsMap;

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
    this.togglePanel.emit(value);
  }
}
