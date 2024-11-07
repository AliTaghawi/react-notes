import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  product: [],
  error: ""
}

const fetchProducts = createAsyncThunk("products/fetch", () => {
  return axios.get("/products")
})

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
      state.error = ""
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export default productSlice.reducer
export { fetchProducts }