import { Component, Input } from '@angular/core';

@Component({
  selector: 'uncommon-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styles: [],
})
export class SlicePipeComponent {
  @Input()
  public clients: string[] = [];

  public renderClients(): string[] {
    return this.clients.map((client, index) => `${index}-${client}`);
  }
}
