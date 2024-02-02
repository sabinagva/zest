
import React from 'react';
import newCollection from '../components/Assets/kyliecosmetics.data';
import Item from '../components/Item/item';
import './KylieCosmetics.css'

const KylieCosmetics = () => {
  return (
    <div className='kylie-collections'>
      <h1>Kylie Cosmetics</h1>
      <hr />
      <div className='kylie-makeup'>
        {newCollection.map((item, i) => (
           <div key={i} className='kylie-item'>
          <Item
            key={i}
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

export default KylieCosmetics;
