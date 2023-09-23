import dbProducts from "../../models/product.model";
/**
 * Registrar usuario
 * @param product
 * @returns
 */

type props = {
  user: string;
  title: string;
  description: string;
  price: string;
  imagePath: string;
}

const addNewProduct = async ({user,title,description,price,imagePath } : props) => {
  const response = await dbProducts.create({user,description,title,price, imagePath});
  return response;
};

export { addNewProduct };
