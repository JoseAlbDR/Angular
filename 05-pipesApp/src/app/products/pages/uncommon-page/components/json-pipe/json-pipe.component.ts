import { Component, Input } from '@angular/core';

@Component({
  selector: 'uncommon-json-pipe',
  templateUrl: './json-pipe.component.html',
  styles: [],
})
export class JsonPipeComponent {
  @Input()
  public person!: { name: string; age:number, address: string };
}
