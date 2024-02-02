import React from 'react';
import newCollection from '../components/Assets/tooface.data';
import Item from '../components/Item/item';
import './TooFaced.css'

const TooFaced = () => {
  return (
    <div className='kylie-collections'>
      <h1>Too Faced</h1>
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

export default TooFaced;