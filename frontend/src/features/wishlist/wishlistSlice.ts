import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/definations";

// interface CartState {
//   cart: ProductType[];
// }

const initialState: ProductType[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const itemExits = state.find(item => item.id === newItem?.id);
      if (!itemExits) {
        state.push(newItem);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
