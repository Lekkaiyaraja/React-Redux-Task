// src/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
