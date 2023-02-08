import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: state => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state.cart = [];
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cart[productId] = (state.cart[productId] || 0) + 1;
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cart[productId] = Math.max((state.cart[productId] || 0) - 1, 0);
    },
  }
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement
  
} = productSlice.actions;

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default productSlice.reducer;