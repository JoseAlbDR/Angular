import { Component, EventEmitter, Output } from '@angular/core';

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

  public person = { name: 'Michael', age: 39, address: '13 Rue del Perdebe' };
  public isCollapsed = true;

  restoreClients(): void {
    this.clients = [
      'Maria',
      'Peter',
      'John',
      'Michael',
      'Ed',
      'Melissa',
      'Natalie',
    ];
  }

  togglePanels(value: boolean): void {
    this.isCollapsed = value;
  }
}
