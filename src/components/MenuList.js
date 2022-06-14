import React from "react";
import { useState } from "react";
import Order from "./Order";
import MenuItems from "./MenuItems";


function MenuList() {
    
    const [menu, setMenu] = useState(MenuItems);

    // const categoryMain = menu.filter((menu) => menu.category === "Main");
    // const categorySide = menu.filter((menu) => menu.category === "Side");
    // const categoryDrink = menu.filter((menu) => menu.category === "Drink");
    
    

    
    return (
        

            <div>
                <h3>Main Items</h3>
                <div>
                {name}
                </div>
                <h3>Side Items</h3>
                <div>
                {info}
                </div>
                <h3>Drinks</h3>
                <div>
                {price}
                </div>
            </div>


    )
  };

  export default MenuList;