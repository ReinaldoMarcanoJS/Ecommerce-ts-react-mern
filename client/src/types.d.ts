export type User = {
    email: string;
    name: string;
    lastname: string;
    password: string;
  };
  
  export type LoginUser = Omit<User, "name", "lastname">;
  