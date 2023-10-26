import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid4(),
      name: 'Krillin',
      power: 1000,
    },
    { id: uuid4(), name: 'Goku', power: 9500 },
    { id: uuid4(), name: 'Vegeta', power: 7500 },
  ];

  public addCharacter(character: Character): void {
    const newChar = { ...character, id: uuid4() };

    this.characters.push({ ...newChar });
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
