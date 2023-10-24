export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Yusep',
};

const passenger2: Passenger = {
  name: 'Mati',
  children: ['Leonidas'],
};

const printChildren = (passenger: Passenger): number => {
  // const howManyChildren = passenger.children!.length;
  const howManyChildren = passenger.children?.length ?? 0;

  // console.log(passenger.name, howManyChildren);
  return howManyChildren;
};
console.log(printChildren(passenger2), printChildren(passenger1));
