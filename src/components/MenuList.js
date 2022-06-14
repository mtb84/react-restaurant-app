import React from "react";
import Order from "./Order";
import MenuItems from "./MenuItems";

function MenuList({item, price, info, total, order}) {
    
    const addToOrder = (e) => {
        e.preventDefault()
        total(price);
        order(item, price)

    }
    
    return (
        <div className="container">
            <h3>{item}</h3>
            <h4>{info}</h4>
            <h4>{price}</h4>
            <button onClick={addToOrder} type="button">Add to Order</button>
        </div>


    );
  }

  export default MenuList;