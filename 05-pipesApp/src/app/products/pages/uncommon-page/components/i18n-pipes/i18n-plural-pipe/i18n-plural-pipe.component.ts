import { Component } from '@angular/core';

@Component({
  selector: 'uncommon-i18n-plural-pipe',
  templateUrl: './i18n-plural-pipe.component.html',
  styles: [],
})
export class I18nPluralPipeComponent {
  public clients: string[] = [
    'Maria',
    'Peter',
    'John',
    'Michael',
    'Ed',
    'Melissa',
    'Natalie',
  ];

  public clientsMap = {
    '=0': 'no clients waiting',
    '=1': 'one client waiting',
    '=2': 'two clients waiting',
    '=3': 'three clients waiting',
    '=4': 'four clients waiting',
    '=5': 'five clients waiting',
    other: '# clients waiting',
  };

  deleteClient(client = ''): void {
    if (client) {
      this.clients = this.clients.filter((name) => client !== name);
    } else {
      this.clients.pop();
    }
  }

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

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
