import React from "react";
import { useState } from "react";
import Order from "./Order";
import menuItems from "../menuItems";


function MenuList({addToOrder}) {
 
    const menuList = menuItems.map((menuItem) => 
        <li key={menuItem.id}>
            <p>{menuItem.name}</p>
            <p>{menuItem.info}</p>  
            <p>{menuItem.price}</p>
            <button type="button" className="add-to-order" onClick={() => addToOrder(menuItem)}>Add to Order</button>
        </li>
    
    )
    



    
    return (
      <div>
        {menuList}
      </div>
    )
  };

  export default MenuList;