import { Product, taxCalc, tax } from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'iPad',
    price: 160,
  },
];

const [total, taxes] = taxCalc({ products: shoppingCart, tax });

console.log(total, taxes);
