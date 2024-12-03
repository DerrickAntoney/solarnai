// Define a type for a single product
export interface Product {
    id: number;
    title: string;
    description: string;
    quantity: number;
    img: string;
    price: number;
  }
  
  // Define the type for an item in the cart
  export interface CartItem extends Product {
    quantity: number;
  }
  
  // Define the type for checkout information
  export interface CheckoutForm {
    name: string;
    address: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }
  