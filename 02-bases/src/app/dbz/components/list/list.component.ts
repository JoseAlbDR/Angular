import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public charList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  public deleteCharacter(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
