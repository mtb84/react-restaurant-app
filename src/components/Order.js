import { useState } from "react";
import MenuList from "./MenuList.js";
import App from "../App.js";
import CustomerInformation from "./CustomerInformation.js";

function Order() {





// const addToOrder = () => {
//     MenuList(name, price)
//     total(price);
//     order(name, price);
// }

// const removeFromOrder = () => {
//     removeTotal(price);
//     removeOrder(name);
// }



return(

    <div>
        <MenuList />
        <button >Add to Order</button>
        <button >Remove from Order</button>
    </div>

);


};
export default Order;