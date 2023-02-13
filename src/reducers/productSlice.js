import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
    items: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: state => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
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
    addToCart(state, action) {
        const existingIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          state.cart[existingIndex] = {
            ...state.cart[existingIndex],
            cartQuantity: state.cart[existingIndex].cartQuantity + 1,
          };
          toast.info("Increased product quantity", {
            position: "bottom-left",
          });
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cart.push(tempProductItem);
          toast.success("Product added to cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      decreaseCart(state, action) {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (state.cart[itemIndex].cartQuantity > 1) {
          state.cart[itemIndex].cartQuantity -= 1;
  
          toast.info("Decreased product quantity", {
            position: "bottom-left",
          });
        } else if (state.cart[itemIndex].cartQuantity === 1) {
          const nextcart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
  
          state.cart = nextcart;
  
          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
  
        localStorage.setItem("cart", JSON.stringify(state.cart));
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
      clearCart: state => {
        state.cart = [];
      },
      getTotals(state, action) {
        let { total, quantity } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      }
  }
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart, decreaseCart, removeFromCart, getTotals, clearCart,

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