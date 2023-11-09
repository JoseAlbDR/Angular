import { Component } from '@angular/core';

@Component({
  selector: 'uncommon-json-pipe',
  templateUrl: './json-pipe.component.html',
  styles: [],
})
export class JsonPipeComponent {
  public person = {
    name: 'Michael',
    age: 39,
    address: '13 Rue del Perdebe',
  };
}
