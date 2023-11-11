import { Component, Input } from '@angular/core';

@Component({
  selector: 'basics-text-pipes',
  templateUrl: './text-pipes.component.html',
  styles: [],
})
export class TextPipesComponent {
  @Input()
  public isCollapsed: boolean = true;

  public input: string = 'wRiTe HeRe';
  public date: Date = new Date();

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
