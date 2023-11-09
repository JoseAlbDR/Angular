import { Component } from '@angular/core';

@Component({
  selector: 'uncommon-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styles: [],
})
export class KeyValuePipeComponent {
  public person = {
    name: 'Michael',
    age: 39,
    address: '13 Rue del Perdebe',
  };
}
