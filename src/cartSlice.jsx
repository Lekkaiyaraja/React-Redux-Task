// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      quantity: 0,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/150/1.jpg",
        "https://via.placeholder.com/150/2.jpg",
        "https://via.placeholder.com/150/3.jpg",
        "https://via.placeholder.com/150/4.jpg",
        "https://via.placeholder.com/150/thumbnail.jpg"
      ]
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      quantity: 0,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/150/1.jpg",
        "https://via.placeholder.com/150/2.jpg",
        "https://via.placeholder.com/150/3.jpg",
        "https://via.placeholder.com/150/thumbnail.jpg"
      ]
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      quantity: 0,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/150/1.jpg"
      ]
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      quantity: 0,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/150/1.jpg",
        "https://via.placeholder.com/150/2.jpg",
        "https://via.placeholder.com/150/3.jpg",
        "https://via.placeholder.com/150/4.jpg",
        "https://via.placeholder.com/150/thumbnail.jpg"
      ]
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      quantity: 0,
      thumbnail: "https://via.placeholder.com/150",
      images: [
        "https://via.placeholder.com/150/1.jpg",
        "https://via.placeholder.com/150/2.jpg",
        "https://via.placeholder.com/150/3.jpg"
      ]
    }
  ],
  totalQuantity: 0,
  totalAmount: 0, // Sum of the initial prices
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.quantity * item.price;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
