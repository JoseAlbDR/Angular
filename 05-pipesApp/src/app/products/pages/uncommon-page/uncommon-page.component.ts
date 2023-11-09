import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  public clients: string[] = [
    'Maria',
    'Peter',
    'John',
    'Michael',
    'Ed',
    'Melissa',
    'Natalie',
  ];
}
