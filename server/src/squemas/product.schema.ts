import { z } from "zod";



const ProductSchema = z.object({
  name: z.string({
    required_error: "Username is required",
  }),
 img: z
 .any()
 ,
  description: z
    .string({
      required_error: "Email is required",
    }),
  price: z
    .string({
      required_error: "password is required",
    })
});


export {ProductSchema };
