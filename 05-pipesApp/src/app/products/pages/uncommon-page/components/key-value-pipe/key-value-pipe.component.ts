import { Component, Input } from '@angular/core';

@Component({
  selector: 'uncommon-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styles: [],
})
export class KeyValuePipeComponent {
  @Input()
  public person!: { name: string; age: number; address: String };
}
