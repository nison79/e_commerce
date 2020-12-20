import { useState , useEffect } from 'react'

import Products from './components/Products/Products'
import NavBar from './components/Products/NavBar/NavBar'
import { commerce } from './lib/commerce'
import './App.css';

function App() {
  const [ products , setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  console.log(products);


  return (
    <div className="App">
      <NavBar/>
      <Products />
    </div>
  );
}

export default App;
