import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";


function App() {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleclick = (items) => {
   
    setCart([...cart, items.id]);
    console.log("cart", cart);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const remove = (id) => {
    const arr = cart.filter((product) => {
      

      return product !== id;
    });
    console.log("newcart", arr);
    setCart(arr);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Amazon handleclick={handleclick} remove={remove} />
     
    </>
  );
}

export default App;
