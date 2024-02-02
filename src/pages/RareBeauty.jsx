import React from 'react';
import newCollection from '../components/Assets/rarebeauty.data';
import Item from '../components/Item/item';
import './RareBeauty.css'

const RareBeauty = () => {
  return (
    <div className='kylie-collections'>
      <h1>Rare Beauty</h1>
      <hr />
      <div className='kylie-makeup'>
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

export default RareBeauty;