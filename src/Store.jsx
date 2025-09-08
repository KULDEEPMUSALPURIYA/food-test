import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const context = createContext();
export default function Store({ children }) {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  function getRecipes() {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch(() => {
        console.log(error);
      });
  }

  useEffect(() => {
    getRecipes();
  }, []);

  function addToCart(id) {
    const recipe = recipes.find((item) => item.id === id);
    if (!recipe) return;
    const existingrecipe = cart.find((item) => item.id === id);
    if (existingrecipe) {
      setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty +1}: item));
    } else {
        setCart([...cart, { ...recipe, qty: 1 }]);
    }
    
  }

  function qtyHendler(id, flag){
        if(flag == 1){
        setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1}: item));
       
        }else{
       setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty - 1}: item));
        }
  }

  function removeFromCart(id){
setCart(cart.filter((item) => item.id !== id ))
  }

  return (
    <context.Provider value={{ recipes, addToCart, cart, qtyHendler, removeFromCart }}>
      {children}
    </context.Provider>
  );
}

export { context };
