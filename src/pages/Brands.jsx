import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './brands.css';

const Brands = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <div className="brands-container">
      <li className="menu-item" onClick={handleMenuToggle}>
        <Link className="menu-link" to='/brands'>
          Brands
        </Link>
        {menu ? <hr className="divider" /> : <></>}
      </li>

      {menu && (
        <div className="sidebar">
          <ul className="sidebar-list">
            <li>
              <Link className="sidebar-link" to='/tartecosmetics'>Tarte Cosmetics</Link>
            </li>
            <li>
              <Link className="sidebar-link" to='/kyliecosmetics'>Kylie Cosmetics</Link>
            </li>
            <li>
              <Link className="sidebar-link" to='/toofaced'>Too Faced</Link>
            </li>
            <li>
              <Link className="sidebar-link" to='/rarebeauty'>Rare Beauty</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Brands;
