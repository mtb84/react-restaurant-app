import { useState } from "react";
import MenuList from "./MenuList.js";
import menuItems from "../menuItems.js";
import App from "../App.js";
import CustomerInformation from "./CustomerInformation.js";

function Order() {


    const [menu, setMenu] = useState(menuItems);
    const [total, setTotal] = useState(0);
    const [newOrder, setNewOrder] = useState([]);
  
  
  
    const order = (item, price) => {
      const newOrderItem = {
        item,
        price
      };
      setNewOrder([...newOrder, newOrderItem]);
    }
  
    const addTotal = (price) => {
      setTotal(total + price)
    }
  
    const removeTotal = (price) => {
      setTotal(total - price)
    }


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
        <button onClick={addTotal}>Add to Order</button>
        <button onClick={removeTotal}>Remove from Order</button>
    </div>

);


};
export default Order;