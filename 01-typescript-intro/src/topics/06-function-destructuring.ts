export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 250.0,
};

interface TaxCalcOptions {
  products: Product[];
  tax: number;
}

export const taxCalc = ({
  products,
  tax,
}: TaxCalcOptions): [number, number] => {
  let total = 0;

  products.forEach(({ price }) => (total += price));

  return [total, total * tax];
};

const shoppingCart: Product[] = [phone, tablet];
export const tax = 0.15;

const options: TaxCalcOptions = {
  products: shoppingCart,
  tax,
};

const [total, taxes] = taxCalc(options);
console.log(total, taxes);

export {};
