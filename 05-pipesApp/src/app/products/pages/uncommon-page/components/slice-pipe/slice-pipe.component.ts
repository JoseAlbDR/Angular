import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uncommon-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styles: [],
})
export class SlicePipeComponent {
  @Input()
  public clients: string[] = [];

  @Input()
  public isCollapsed: boolean = true;

  @Output()
  public onRestoreSliceClients: EventEmitter<void> = new EventEmitter();

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
