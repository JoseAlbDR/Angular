import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang.service';
import { Color, Hero } from 'src/app/products/interfaces/hero.interface';

@Component({
  selector: 'custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styles: [],
})
export class CustomPipesComponent implements OnInit {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public input: string = '';

  @Input()
  public linkContent: string = '';

  @Input()
  public title: string = '';

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.languageChanged.subscribe((language: string) => {
      this.selectedLanguage = language;
    });
  }

  public selectedLanguage: string = this.langService.selectedLanguage;
  public languageMap = this.langService.customPipesMap.customPipes;

  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | '' | undefined = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'lightblue',
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: 'red',
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: 'red',
    },
    {
      name: 'Robin',
      canFly: false,
      color: 'lightgreen',
    },
    {
      name: 'Hulk',
      canFly: false,
      color: 'lightgreen',
    },
    {
      name: 'Thor',
      canFly: true,
      color: 'lightyellow',
    },
  ];

  sortedBy(by: keyof Hero | '' | undefined) {
    this.sortBy = by;
  }

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
