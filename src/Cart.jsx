// src/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';
import './App.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Discount: {item.discountPercentage}%</p>
              <p>Rating: {item.rating}</p>
              <p>Stock: {item.stock}</p>
              <p>Category: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
