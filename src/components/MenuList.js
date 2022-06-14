import React from "react";
import { useState } from "react";
import Order from "./Order";
import menuItems from "../menuItems";


function MenuList(name, item, price) {

  

    const menu_list = menuItems.map((menuItem) => 
        <li key={menuItem.id}>
            <p>{menuItem.name}</p>
            <p>{menuItem.info}</p>  
            <p>{menuItem.price}</p>
            <button>Add to Order</button>
        </li>
    )

    
    // const [menu, setMenu] = useState(MenuItems);

    // const categoryMain = menu.filter((menu) => menu.category === "Main");
    // const categorySide = menu.filter((menu) => menu.category === "Side");
    // const categoryDrink = menu.filter((menu) => menu.category === "Drink");
    
    


    
    return (
        

            <div>
                <h3>Main Items</h3>
                <div>
                {menu_list}
            
                </div>
                <h3>Side Items</h3>
                <div>
                </div>
                <h3>Drinks</h3>
                <div>
                </div>
            </div>


    )
  };

  export default MenuList;