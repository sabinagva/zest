import React from 'react';
import newCollection from '../components/Assets/rarebeauty.data';
import Item from '../components/Item/item';
import './RareBeauty.css';

const RareBeauty = () => {
  return (
    <div className='rare-collections'>
      <h1>Rare Beauty</h1>
      <hr />
      <div className='rare-makeup'>
        {newCollection.map((item, i) => (
          <div key={i} className='rare-item'>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              className={item.image ? 'map-image' : ''}   
            />
            <button className='btn'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RareBeauty;
