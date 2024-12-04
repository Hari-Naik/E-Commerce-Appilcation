import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/definations";

interface CartState {
  cart: ProductType[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      console.log("cartState", state);
      const newItem = action.payload;
      const itemExits = state.cart.find(item => item.id === newItem?.id);
      if (!itemExits) {
        state.cart.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload) {
          const quantity = item.quantity && item?.quantity + 1;
          return { ...item, quantity };
        }
        return item;
      });
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload) {
          let quantity = item.quantity;
          if (item.quantity && item?.quantity > 1) {
            quantity = item?.quantity - 1;
          }

          return { ...item, quantity };
        }
        return item;
      });
    },
    incrementQuantityByValue: (
      state,
      action: PayloadAction<{ id: number; value: number }>
    ) => {
      //   state.cart = state.cart.map(item => {
      //     if (item.id === action.payload.id) {
      //       const quantity =
      //         item.quantity && item?.quantity + action.payload.value;
      //       return { ...item, quantity };
      //     }
      //     return item;
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          const newQuantity = (item.quantity || 0) + action.payload.value; // Initialize to 0 if undefined
          return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity }; // Ensure quantity doesn't go below 1
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  incrementQuantityByValue,
} = cartSlice.actions;

export default cartSlice.reducer;
