import { Component, Input } from '@angular/core';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'basics-text-pipes',
  templateUrl: './text-pipes.component.html',
  styles: [],
})
export class TextPipesComponent {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public title: string = '';

  @Input()
  public input: string = '';

  public date: Date = new Date();

  constructor() {}

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
