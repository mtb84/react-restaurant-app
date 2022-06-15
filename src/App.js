import { useState } from 'react';
import React from 'react';
import MenuList from './components/MenuList.js';
import MenuItems from './menuItems.js';
import Order from './components/Order'
import './App.css';
import CustomerInformation from "./components/CustomerInformation"


function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = ({name, price}) => {
    const newOrderItem = {
      name,
      price
    };
    setOrder([...order, newOrderItem])

  }


  
  
  return (
    <div className='container'>
      <header>
          <nav><h1>Burger Joint</h1></nav>
      </header>
      <div className='menu-body'>
        <h2 className='menu'>MENU</h2>
        <MenuList addToOrder={addToOrder}/>
        <p>Your Order: <Order order={order} /></p>
      </div>
    </div>
    
  )
}
export default App;