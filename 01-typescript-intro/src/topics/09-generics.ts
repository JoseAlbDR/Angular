export const whatsMyType = <T extends string | number | number[]>(
  argument: T
): T => {
  return argument;
};

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5, 6]);
const amIBoolean = whatsMyType<boolean>(true);

console.log(amIString.toLowerCase());
console.log(amINumber.toFixed(2));
console.log(amIArray.length);
