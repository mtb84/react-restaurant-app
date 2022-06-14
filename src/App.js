import { useState } from 'react';
import React from 'react';
import MenuList from './components/MenuList.js';
import MenuItems from './menuItems.js';
import Order from './components/Order'
import './App.css';
import CustomerInformation from "./components/CustomerInformation"


function App(props) {
  // const [menu, setMenu] = useState(MenuItems);
  // const [total, setTotal] = useState(0);
  // const [newOrder, setNewOrder] = useState([]);



  // const order = (item, price) => {
  //   const newOrderItem = {
  //     item,
  //     price
  //   };
  //   setNewOrder([...newOrder, newOrderItem]);
  // }

  // const addTotal = (price) => {
  //   setTotal(total + price)
  // }

  // const removeTotal = (price) => {
  //   setTotal(total - price)
  // }


  
  return (
    <div className='container'>
      <header>
          <nav><h1>Burger Joint</h1></nav>
      </header>
      <div className='menu-body'>
        <h2 className='menu'>MENU</h2>

      </div>
      
      <p>Your Order: <Order /></p>
    </div>
    
  )
}
export default App;