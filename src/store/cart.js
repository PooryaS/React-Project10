import { createSlice } from "@reduxjs/toolkit";

// بازیابی داده‌های ذخیره شده در localStorage
// Initial state for the cart, retrieving items from localStorage if available
const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : []
};

// Create a Redux slice for cart management
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState, // Initial state for the cart
  reducers: {
    // Reducer to add items to the cart
    addToCart(state, action) {
      const { productId, quantity } = action.payload; // Extract productId and quantity from the action payload
      const indexProductId = state.items.findIndex(item => item.productId === productId); // Check if the product already exists in the cart
      if (indexProductId >= 0) {
        // If the product exists, update its quantity
        state.items[indexProductId].quantity += quantity;
      } else {
        // If the product does not exist, add it to the cart
        state.items.push({ productId, quantity });
      }
      // ذخیره داده‌های جدید در localStorage
      // Save the updated cart to localStorage
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    // Reducer to clear all items from the cart
    clearCart: (state) => {
      state.items = []; // Empty the cart
      // Update localStorage to reflect the cleared cart
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    // Reducer to change the quantity of a specific item in the cart
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload; // Extract productId and quantity from the action payload
      const indexProductId = state.items.findIndex(item => item.productId === productId); // Find the product in the cart
      if (indexProductId >= 0) {
        if (quantity > 0) {
          // If the quantity is greater than 0, update the quantity
          state.items[indexProductId].quantity = quantity;
        } else {
          // If the quantity is 0 or less, remove the item from the cart
          state.items = state.items.filter(item => item.productId !== productId);
        }
      }
      // ذخیره داده‌های جدید در localStorage
      // Save the updated cart to localStorage
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    // Reducer to load the cart from an external source
    loadCart(state, action) {
      // Replace the current state with the payload (new cart items)
      return { ...state, items: action.payload };
    }
  }
});

// Export the actions and reducer from the cart slice
export const { addToCart, clearCart, changeQuantity, loadCart } = cartSlice.actions;
export default cartSlice.reducer;