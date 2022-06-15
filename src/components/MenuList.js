import React from "react";
import { useState } from "react";
import Order from "./Order";
import menuItems from "../menuItems";


function MenuList({name, price}) {

    const [newOrder, setNewOrder] = useState(menuItems)

    const order = () => {
        const newOrderItem = {
          name,
          price
        };
        setNewOrder([...newOrder, newOrderItem]);
      }
    
    const addToOrder = (e) => {
        e.preventDefault()
        return order

    }

    const menu_list = menuItems.map((menuItem) => 
        <li key={menuItem.id}>
            <p>{menuItem.name}</p>
            <p>{menuItem.info}</p>  
            <p>{menuItem.price}</p>
            <button className="add-to-order" onClick={addToOrder}>Add to Order</button>
        </li>
    
    )
    



    
    return (
        

            <div>
                <div>
                {menu_list}
                </div>
                <p>{setNewOrder}</p>
            </div>


    )
  };

  export default MenuList;