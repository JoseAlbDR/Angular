import { EventEmitter, Injectable } from '@angular/core';

interface Language {
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root',
})
export class LangService {
  languageChanged = new EventEmitter<string>();

  constructor() {}

  private selectedLanguage: string = 'en';

  get getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  set setSelectedLanguage(value: string) {
    this.selectedLanguage = value;
    this.languageChanged.emit(value);
  }

  get infoLanguageMap() {
    const info = {
      title: {
        es: '¿Qué es un Pipe de Angular?',
        en: 'What is an Angular pipe?',
      },
      content: {
        es: 'Los pipes de Angular son una característica en el marco de trabajo Angular que te permite transformar y dar formato a los datos en tus plantillas. Se utilizan para aplicar transformaciones simples a los valores antes de mostrarlos en la interfaz de usuario. Los pipes son una forma conveniente de realizar operaciones comunes, como dar formato a fechas, convertir texto a mayúsculas o minúsculas y filtrar matrices.',
        en: 'Angular pipes are a feature in the Angular framework that allows you to transform and format data in your templates. They are used to apply simple transformations to values before displaying them in the user interface. Pipes are a convenient way to perform common operations, such as formatting dates, converting text to uppercase or lowercase, and filtering arrays.',
      },
    };

    return info;
  }

  get menuLanguageMap() {
    const menu: { [key: string]: { [key: string]: string } } = {
      title: {
        es: 'Pipes de Angular',
        en: 'Angular Pipes',
      },
      textDates: {
        es: 'Texto y Fechas',
        en: 'Text and Dates',
      },
      numbers: {
        es: 'Números',
        en: 'Numbers',
      },
      uncommon: {
        es: 'Poco comúnes',
        en: 'Uncommon',
      },
      custom: {
        es: 'Pipes Personalizados',
        en: 'Custom Pipes',
      },
    };
    return menu;
  }
}
