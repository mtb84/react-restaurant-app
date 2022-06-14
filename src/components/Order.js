import { useState } from "react";
import MenuList from "./MenuList.js";
import App from "../App"
function Order(name, price, total) {


const addToOrder = () => {
    total(price);
    order(name, price);
}

const removeFromOrder = () => {
    removeTotal(price);
    removeOrdere(name);
}



return(

    <div>
        <button onClick={addToOrder}>Add to Order</button>
        <button onClick={removeFromOrder}>Remove from Order</button>
    </div>

);


};
export default Order;