import { EventEmitter, Injectable } from '@angular/core';

interface Language {
  name: string;
  code: string;
}

type ClientsMap = {
  [key: string]: {
    [key: string]: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class LangService {
  languageChanged = new EventEmitter<string>();

  private currentLanguage: string;

  constructor() {
    this.currentLanguage = this.loadLanguage() || 'en';
  }

  private loadLanguage() {
    return localStorage.getItem('language');
  }

  private saveLanguage(): void {
    localStorage.setItem('language', this.currentLanguage);
  }

  get selectedLanguage(): string {
    return this.currentLanguage;
  }

  set selectedLanguage(value: string) {
    if (this.currentLanguage !== value) {
      this.currentLanguage = value;
      this.saveLanguage();
      this.languageChanged.emit(value);
    }
  }

  get infoLanguageMap() {
    const info: {
      [key: string]: { [key: string]: { [key: string]: string } };
    } = {
      common: {
        title: {
          es: '¿Qué es un Pipe de Angular?',
          en: 'What is an Angular pipe?',
        },
        content: {
          es: 'Los pipes de Angular son una característica de Angular que te permite transformar y dar formato a los datos en tus plantillas. Se utilizan para aplicar transformaciones simples a los valores antes de mostrarlos en la interfaz de usuario. Los pipes son una forma conveniente de realizar operaciones comunes, como dar formato a fechas, convertir texto a mayúsculas o minúsculas y filtrar matrices.',
          en: 'Angular pipes are a feature in the Angular framework that allows you to transform and format data in your templates. They are used to apply simple transformations to values before displaying them in the user interface. Pipes are a convenient way to perform common operations, such as formatting dates, converting text to uppercase or lowercase, and filtering arrays.',
        },
      },
      custom: {
        title: {
          es: '¿Qué es un Pipe de Angular Personalizado?',
          en: 'What is a Custom Angular pipe?',
        },
        content: {
          es: 'Un Pipe Personalizado de Angular es un Pipe que creas tú mismo para realizar una transformación específica que no está cubierta por los Pipes ya incluidos en Angular. Para crear un Pipe Personalizado, típicamente implementarás la interfaz PipeTransform y definirás la lógica de transformación en el método transform.',
          en: 'A custom Angular pipe is a pipe that you create yourself to perform a specific transformation that is not covered by the built-in pipes. To create a custom pipe, you will typically implement the PipeTransform interface and define the transformation logic in the transform method.',
        },
      },
      button: {
        link: {
          es: 'Más info',
          en: 'More info',
        },
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

  get customPipesMap() {
    const customPipes = {
      title: {
        es: 'Pipes Personalizados',
        en: 'Custom Pipes',
      },
      content: {
        es: 'Pipes creados por el usuario',
        en: 'Pipes created by user',
      },
      placeholder: {
        es: 'eScRibE AquI',
        en: 'wRiTe HeRe',
      },
    };
    return customPipes;
  }

  get uncommonPipesMap() {
    const uncommonPipes = {
      title: {
        es: 'Pipes Poco Comunes',
        en: 'Uncommon Pipes',
      },
      content: {
        es: 'Pipes incluidos en Angular - Normalmente en el Módulo Common',
        en: 'Included pipes in Angular - Usually in Common Module',
      },
      buttons: {
        restore: <{ [key: string]: string }>{
          es: 'Restaurar Clientes',
          en: 'Restore Clients',
        },
        delete: <{ [key: string]: string }>{
          es: 'Borrar Cliente',
          en: 'Delete Client',
        },
      },
      i18nPlural: {
        content: <{ [key: string]: string }>{
          es: 'Actualmente',
          en: 'Currently we have',
        },
        clientsMap: <ClientsMap>{
          en: {
            '=0': 'no clients waiting',
            '=1': 'one client waiting',
            '=2': 'two clients waiting',
            '=3': 'three clients waiting',
            '=4': 'four clients waiting',
            '=5': 'five clients waiting',
            other: '# clients waiting',
          },
          es: {
            '=0': 'no tenemos clientes esperando',
            '=1': 'tenemos un cliente esperando',
            '=2': 'tenemos dos clientes esperando',
            '=3': 'tenemos tres clientes esperando',
            '=4': 'tenemos cuatro clientes esperando',
            '=5': 'tenemos cinco clientes esperando',
            other: 'tenemos # clientes esperando',
          },
        },
      },
      keyValueJson: {
        message: {
          es: 'Imprimir objeto sin Pipe - person',
          en: 'Print Object without Pipe - person',
        },
      },
      async: {
        message: {
          es: 'Observable sin Pipe',
          en: 'Observable without Pipe',
        },
      },
    };

    return uncommonPipes;
  }

  get numberPipesMap() {
    const numbersPipes = {
      title: {
        es: 'Pipes de Números',
        en: 'Numbers Pipes',
      },
      content: {
        es: 'Pipes incluidos en Angular - Normalmente en el Módulo Common',
        en: 'Included pipes in Angular - Usually in Common Module',
      },
      numberPipe: {
        title: {
          es: 'Pipe de Número',
          en: 'Number Pipe',
        },
        name: {
          es: 'Número',
          en: 'Number',
        },
      },
      percentagePipe: {
        title: {
          es: 'Pipe de Porcentaje',
          en: 'Percentage Pipe',
        },
        name: {
          es: 'Porcentaje',
          en: 'Percentage',
        },
      },
      currencyPipe: {
        title: {
          es: 'Pipe de Moneda',
          en: 'Currency Pipe',
        },
        name: {
          es: 'Moneda',
          en: 'Currency',
        },
      },
    };
    return numbersPipes;
  }

  get basicPipesMap() {
    const basicPipes = {
      title: {
        es: 'Pipes Básicos',
        en: 'Basic Pipes',
      },
      content: {
        es: 'Pipes incluidos en Angular - Normalmente en el Módulo Common',
        en: 'Included pipes in Angular - Usually in Common Module',
      },
      placeholder: {
        es: 'eScRibE AquI',
        en: 'wRiTe HeRe',
      },
      result: {
        es: 'Resultado',
        en: 'Result',
      },
      textPipes: {
        title: {
          es: 'Pipes de Texto',
          en: 'Text Pipes',
        },
      },
      datePipes: {
        title: {
          es: 'Pipes de Fecha',
          en: 'Date Pipes',
        },
      },
      datePipesLocale: {
        es: 'Pipes de Fecha Locales (idioma)',
        en: 'Date Pipes Locale (language)',
      },
    };

    return basicPipes;
  }

  get linkButtonsMap() {
    const linkButtons: { [key: string]: { [key: string]: string } } = {
      infoContent: {
        es: 'Más Info',
        en: 'More Info',
      },
      linkContent: {
        es: 'Revisar Código',
        en: 'Check Code',
      },
      pipeContent: {
        es: 'Revisar Código Pipe',
        en: 'Check Pipe Code',
      },
    };

    return linkButtons;
  }

  get openButtonsMap() {
    const openButtons = {
      es: 'Abrir Todos',
      en: 'Open All',
    };

    return openButtons;
  }
}
