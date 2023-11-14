import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-toggle-case-pipe',
  templateUrl: './toggle-case-pipe.component.html',
  styles: [],
})
export class ToggleCasePipeComponent {
  @Input()
  public isCollapsed: boolean = true;

  public input: string = 'Write Something';

  public onFocusOut(event: FocusEvent) {
    if (event?.target instanceof HTMLInputElement) {
      if (event.target.value === '') {
        this.input = 'wRiTe HeRe';
      }
    }
  }
}
