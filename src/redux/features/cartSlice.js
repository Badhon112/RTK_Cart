import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  count: 0,
  allPrice: 0,
};
//
// card Slice

const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        // state.count = state.count + 1;
        // state.allPrice += action.payload.price;
        state.carts[ItemIndex].qnty+=1
      } else {
        const temp={...action.payload,qnty:1}
        state.carts = [...state.carts, temp];
        state.count = state.count + 1;
        state.allPrice += action.payload.price;
      }
    },
    removeToCart: (state, action) => {
      (state.carts = []), (state.count = 0);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
