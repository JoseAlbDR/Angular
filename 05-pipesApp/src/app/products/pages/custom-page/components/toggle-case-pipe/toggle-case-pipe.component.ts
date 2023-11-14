import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-toggle-case-pipe',
  templateUrl: './toggle-case-pipe.component.html',
  styles: [],
})
export class ToggleCasePipeComponent {
  @Input()
  public isCollapsed: boolean = true;

  @Input()
  public input: string = '';

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
