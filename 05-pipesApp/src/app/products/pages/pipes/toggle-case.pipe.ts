import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toggleType: string): string {
    return toggleType === 'upper' ? value.toUpperCase() : value.toLowerCase();
  }
}
