import React from 'react';
import newCollection from '../components/Assets/tooface.data';
import Item from '../components/Item/item';
import './TooFaced.css';

const TooFaced = () => {
  return (
    <div className='too-collections'>
      <h1>Too Faced</h1>
      <hr />
      <div className='too-makeup'>
        {newCollection.map((item, i) => (
          <div className='too-item' key={i}>
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

export default TooFaced;
