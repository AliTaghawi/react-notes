import { configureStore } from "@reduxjs/toolkit"

import productReducer from '../features/products/productsSlice'
import cardReducer from '../features/card/cardSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    card: cardReducer,
  }
})

export default store