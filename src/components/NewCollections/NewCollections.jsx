// NewCollections.jsx

import React from 'react';
import './NewCollections.css';
import newCollection from '../Assets/newarrivals.data';
import Item from '../Item/item';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Arrivals</h1>
      <hr />
      <div className='collections'>
        {newCollection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            className={item.image ? 'map-image' : ''}  
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

