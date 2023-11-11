import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uncommon-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styles: [],
})
export class SlicePipeComponent {
  @Input()
  public clients: string[] = [];

  @Output()
  public onRestoreSliceClients: EventEmitter<void> = new EventEmitter();

  public renderClients(): string[] {
    return this.clients.map((client, index) => `${index}-${client}`);
  }

  restoreClients(): void {
    this.onRestoreSliceClients.emit();
  }
}
