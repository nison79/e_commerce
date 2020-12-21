import { useState , useEffect } from 'react'

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
    const item = await commerce.cart.add(productId , quantity);
    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

console.log(cart);


  return (
    <div className="App">
      <NavBar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
