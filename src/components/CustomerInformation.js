import { useState } from "react";

function CustomerInformation() {

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [instructions, setInstructions] = useState("")
    const [customerInfo, setCustomerInfo] = useState("")

    const addInfo = (e) => {
        e.preventDefault();
        const newInfo = {
          name,
          phoneNumber,
          instructions
        }
    
    setCustomerInfo([...customerInfo, newInfo]);
    setName("");
    setPhoneNumber("");
    setInstructions("");
  }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateInstructions = (e) => {
        setInstructions(e.target.value);
    }

    const updatePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const orderInfo = customerInfo.map((customerInfo) => (
        <li key={customerInfo.id}>
            <div className="customerInfo">
                <ul>
                    <li>{customerInfo.name}</li>
                    <li>{customerInfo.phoneNumber}</li>
                    <li>{customerInfo.instructions}</li>
                </ul>
            </div>
        </li>
    ));

    return (

        <div className="info">
          
          <form onSubmit={addInfo}>
            <h2>Your Information</h2>
            <label htmlFor=""> Name for Order:
            <input value={name} onChange={updateName} type="text" id='name'/>
            </label> <br />
            <label> Phone Number:
            <input type="text" value={phoneNumber} onChange={updatePhoneNumber} name="phoneNumber" />
            </label><br />
            <label htmlFor=""> Instructions:
            <input type="text"  value={instructions} onChange={updateInstructions} id="address" />
            </label> <br />
            <button type="submit">Save</button>
          </form>
    
          <ul className='contacts'>
            {orderInfo}
          </ul>
        </div>
    
      
      );



};

export default CustomerInformation