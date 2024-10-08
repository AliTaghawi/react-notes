import axios from 'axios'

export const fetchProducts = async () => {
  const resulte = await axios.get('https://fakestoreapi.com/products')
  return resulte.data
}

export const fetchProduct = async (id) => {
  const resulte = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return resulte.data
}