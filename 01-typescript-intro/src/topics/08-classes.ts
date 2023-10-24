export class Person {
  constructor(public name: string, private address: string) {
    this.name = name;
    this.address = address;
  }
}

const ironman = new Person('Pepe', 'Mi calle');

console.log(ironman);
