import { useState } from 'react';
import React from 'react';
import MenuList from './components/MenuList.js';
import Order from './components/Order';
import './App.css';



function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = ({name, price}) => {
    const newOrderItem = {
      name,
      price
    };
    setOrder([...order, newOrderItem])
  }

  const submitOrder = () => {
    localStorage.setItem("order", JSON.stringify(order));
    setOrder([])
    };

  
  return (
    <div className='container'>
      <header>
          <nav>
            <h1>Burger Joint</h1>
            </nav>
      </header>
      <p className='order-screen'>Your Order: <Order order={order}  />
        <button type="submit" className='submitOrder' onClick={submitOrder}>Submit Order</button>
      </p>
      <div className='menu-body'>
        <h2 className='menu'>MENU</h2>
        <MenuList addToOrder={addToOrder}/>
      </div>
    </div>
    
  )
}
export default App;