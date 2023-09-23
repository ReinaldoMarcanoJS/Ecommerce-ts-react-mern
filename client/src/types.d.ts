export type User = {
    email: string;
    name: string;
    lastname: string;
    password: string;
  };
  
  export type LoginUser = Omit<User, "name", "lastname">;
  
  export type Product = {
    name: string;
    description: string;
    price: string;
  }[];
  
  export type ArrayProducts = {
    products: Product[]
  }