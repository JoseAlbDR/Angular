import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'uncommon-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styles: [],
})
export class SlicePipeComponent implements OnInit {
  @Input()
  public clients: string[] = [];

  @Input()
  public isCollapsed: boolean = true;

  @Output()
  public onRestoreSliceClients: EventEmitter<void> = new EventEmitter();

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
      this.restoreBtn =
        this.langService.uncommonPipesMap.buttons.restore[
          this.selectedLanguage
        ];
      this.deleteBtn =
        this.langService.uncommonPipesMap.buttons.delete[this.selectedLanguage];
    });
  }

  public selectedLanguage = this.langService.selectedLanguage;
  public restoreBtn =
    this.langService.uncommonPipesMap.buttons.restore[this.selectedLanguage];
  public deleteBtn =
    this.langService.uncommonPipesMap.buttons.delete[this.selectedLanguage];

  public renderClients(): string[] {
    return this.clients.map((client, index) => `${index}-${client}`);
  }

  deleteClient(client = ''): void {
    if (client) {
      this.clients = this.clients.filter((name) => client !== name);
    } else {
      this.clients.pop();
    }
  }

  restoreClients(): void {
    this.onRestoreSliceClients.emit();
  }
}
