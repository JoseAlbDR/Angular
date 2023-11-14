import { Component, Input, OnInit } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'custom-toggle-case-pipe',
  templateUrl: './toggle-case-pipe.component.html',
  styles: [],
})
export class ToggleCasePipeComponent implements OnInit {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public input: string = '';

  @Input()
  public linkContent: string = '';

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  public selectedLanguage: string = this.langService.selectedLanguage;
  public languageMap = this.langService.customPipesMap.toggleCase;

  public isUpperCase: boolean = false;

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
