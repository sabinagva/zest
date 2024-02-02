import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Shop from './pages/Shop';
import Brands from './pages/Brands';
import About from './pages/About';
import Navbar from './components/navbar/Navbar';
import Cart from './pages/CartItems'
import LoginSignup from './pages/LoginSignup'
import NewCollections from "./components/NewCollections/NewCollections";
import KylieCosmetics from "./pages/KylieCosmetics"
import TarteCosmetics from "./pages/TarteCosmetics"
import TwoFaced from "./pages/TooFaced"
import RareBeauty from "./pages/RareBeauty";
import CartItems from "./pages/CartItems";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/CartItems">
            <CartItems />
          </Route>
          <Route exact path="/login">
            <LoginSignup />
          </Route>
          <Route exact path="/newcollections">
            <NewCollections />
          </Route>
         <Route exact path="/kyliecosmetics">
            <KylieCosmetics/>
          </Route>
           
          <Route exact path="/tartecosmetics">
            <TarteCosmetics/>
          </Route>
          <Route exact path="/rarebeauty">
            <RareBeauty/>
          </Route>
          <Route exact path="/toofaced">
            <TwoFaced/>
          </Route> 
          {/* Add a default route or a Redirect component for unmatched paths */}
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;





