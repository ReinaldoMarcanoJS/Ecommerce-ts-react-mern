import { ArrayProducts } from '../types'
import axios from './axios'

export const getProducts = async () => {
    await axios.get<ArrayProducts>("/products")
    .then((res) => res.data)
    .catch((err) => console.log(err))
}

