import React, { useState } from 'react';

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    if (product.trim()) {
      const newCart = [...cart, { product, quantity }];
      setCart(newCart);
      setProduct('');
      setQuantity(1);
    } else {
      alert('Please enter a product name.');
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Add to Cart</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter product name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ padding: '10px', width: '20%' }}
        />
        <br /> <br />
        <button onClick={addToCart} style={{ padding: '10px', marginLeft: '10px' }}>
          Add to Cart
        </button>
      </div>
      <h3>Cart Items</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              border: '1px solid #ccc',
              marginBottom: '5px',
            }}
          >
            <span>
              {item.product} (x{item.quantity})
            </span>
            <button
              onClick={() => removeFromCart(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;