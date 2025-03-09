import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { items: [], totalPrice: 0 };
};

const initialState = loadCartFromLocalStorage()

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.items.push({ ...product });
      }

      state.totalPrice += product.price * product.quantity;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state,action)=>{
      const productId = action.payload
      const item = state.items.find(item=> item.id === productId)

      if (item) {
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
      saveCartToLocalStorage(state);
    },
  },
});

export const {addToCart,removeFromCart} = slice.actions;
export default slice.reducer;
