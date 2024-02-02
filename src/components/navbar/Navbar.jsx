import './Navbar.css'
import logo from '../Assets/zest1-removebg-preview.png'
import cart from '../Assets/cart.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const brandNames = ["Rare Beauty", "Tarte Cosmetics", "Too Faced", "Kylie Cosmetics"];

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={()=> setMenu("brands")}><Link style={{textDecoration: 'none'}} to='/brands'>Brands</Link>{menu === "brands" ? <hr /> : <></>}</li>

                {/* <li onClick={() => setMenu("brands")}>
                    <Link style={{ textDecoration: 'none' }} to='/brands'>Brands</Link>
                    {menu === "brands" ? <hr /> : <></>}
                    {menu === "brands" && (
                        <ul>
                            {brandNames.map((brand, index) => (
                                <li key={index}>{brand}</li>
                            ))}
                        </ul>
                    )}
                </li> */}

                <li onClick={() => setMenu("about")}>
                    <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img className="cart" src={cart} alt="" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar;

