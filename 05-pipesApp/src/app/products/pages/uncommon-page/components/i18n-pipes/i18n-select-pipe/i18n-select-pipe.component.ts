import { Component, OnInit } from '@angular/core';

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'uncommon-i18n-select-pipe',
  templateUrl: './i18n-select-pipe.component.html',
  styles: [],
})
export class I18nSelectPipeComponent implements OnInit {
  public name: string = 'Alberto';
  public languages: Language[] | undefined;
  public selectedLanguage: Language = { name: 'English', code: 'en' };

  ngOnInit(): void {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'German', code: 'de' },
      { name: 'French', code: 'fr' },
      { name: 'Spanish', code: 'es' },
      { name: 'Italian', code: 'ita' },
    ];
  }

  get languageMap() {
    return {
      es: `Saludos ${this.name}, es un placer tenerlo en el evento.`,
      en: `Greetings ${this.name}, is a pleasure to have you in our event.`,
      de: `Gruß ${this.name}, es ist eine Freude, Sie auf der Veranstaltung zu haben.`,
      fr: `Salutations ${this.name}, c'est un plaisir de vous avoir à l'événement`,
      ita: `Saluti ${this.name}, è un piacere avervi all'evento.`,
    };
  }

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
