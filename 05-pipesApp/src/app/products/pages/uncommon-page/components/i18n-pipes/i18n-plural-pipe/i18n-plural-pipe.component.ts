import { Component } from '@angular/core';

@Component({
  selector: 'uncommon-i18n-plural-pipe',
  templateUrl: './i18n-plural-pipe.component.html',
  styles: [],
})
export class I18nPluralPipeComponent {
  redirect(url: string) {
    window.open(url, '_blank');
  }
}
