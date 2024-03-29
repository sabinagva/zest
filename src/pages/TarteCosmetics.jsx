import React, { useState } from 'react';
import newCollection from '../components/Assets/tartecosmetics.data';
import Item from '../components/Item/item';
import './TarteCosmetics.css';


const TarteCosmetics = () => {
  // const [cartItems, setCartItems] = useState= ([]);
  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product])
  //}
  return (
    <div className='tarte-collections'>
      <h1>Tarte Cosmetics</h1>
      <hr />
      <div className='tarte-makeup'>
  {newCollection.map((item, i) => (
    <div key={i} className='tarte-item'>
      <Item
        className={item.image ? 'map-image' : ''}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
      <div className='item-details'>
        <div className='item-name'>{item.name}</div>
        <div className='btn-container'>
          <button className='btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  ))}
</div>





    </div>
  );
};

export default TarteCosmetics;
