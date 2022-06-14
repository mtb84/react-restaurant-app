import { useState } from 'react';
import React from 'react';
import MenuList from './components/MenuList.js';
import MenuItems from './components/MenuItems.js';
import Order from './components/Order'
import './App.css';
import CustomerInformation from "./components/CustomerInformation"


function App(props) {
  const [menu, setMenu] = useState(MenuItems);
  const [total, setTotal] = useState(0);
  const [newOrder, setNewOrder] = useState([]);

  const typeMain = menu.filter((menu) => menu.category === "Main");
  const typeSide = menu.filter((menu) => menu.category === "Side");
  const typeDrink = menu.filter((menu) => menu.category === "Drink");

  const order = (item, price) => {
    const newOrderItem = {
      item,
      price
    };
    setNewOrder([...newOrder, newOrderItem]);
  }

  const subtotal = (price) => {
    setTotal(total + price)
  }

  const removeTotal = (price) => {
    setTotal(total - price)
  }


  
  return (
    <div className='container'>
      <header>
          <nav><h1>Burger Joint</h1></nav>
      </header>
      <div className='menu-body'>
        <h2 className='menu'>MENU</h2>
      <div>
        <h2>Main Items</h2>
        <div>
          {typeMain}
        </div>
        <h2>Side Items</h2>
        <div>
          {typeSide}
        </div>
        <h2>Drinks</h2>
        <div>
          {typeDrink}
        </div>
      </div>
      <p>Your Total: ${total}</p>
      <CustomerInformation />
      </div>
    </div>
  )
}
export default App;