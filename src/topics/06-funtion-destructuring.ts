
export interface IProduct {
    description: string;
    price: number;
}

const phone: IProduct = {
    description: 'Nokia A1',
    price: 150.00
}

const tablet: IProduct = {
    description: 'iPad Air',
    price: 250.00
}

interface ITaxCalculationOptions {
    tax: number,
    products: IProduct[]
}

//const taxCalculation = ({ products, tax }: ITaxCalculationOptions): [number, number] => {
export const taxCalculation = (options: ITaxCalculationOptions): [number, number] => {
    
    const { products, tax } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxes] = taxCalculation({ products: shoppingCart, tax });

console.log('Total:', total);
console.log('Taxes:', taxes);


