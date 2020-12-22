import { useState , useEffect } from 'react'

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import Products from './components/Products/Products'
import NavBar from './components/Products/NavBar/NavBar'
import Cart from './components/Products/Cart/Cart'
import { commerce } from './lib/commerce'
import './App.css';

function App() {
  const [ products , setProducts ] = useState([]);
  const [cart , setCart ] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId , quantity) => {
    const response = await commerce.cart.add(productId , quantity);
    setCart(response.cart);
  }

  const handleUpdateCartQty = async (productId , quantity) => {
    const response = await commerce.cart.update(productId , {quantity});

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

console.log(cart);


  return (
    <Router>
      <div className="App">
        <NavBar totalItems={cart.total_items}/>
        <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            
            <Route exact path="/cart">
              <Cart 
              cart={cart} 
              handleAddToCart={handleAddToCart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty ={handleUpdateCartQty}
              />
            </Route>
          
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
