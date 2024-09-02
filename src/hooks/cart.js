import { db } from "../data/db";
import { useState, useEffect } from "react";
import { useMemo } from "react";
export const useCart = () =>{

    const inicialcart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : []; // Asegúrate de devolver un array
      };
    
      const [data, setData] = useState(db);
      const [cart, setCart] = useState(inicialcart()); // Corrección aquí para inicializar correctamente
    
      // Guardar en localStorage cada vez que el carrito cambia
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
      function addCart(item) {
        const itemexiste = cart.findIndex(guitarra => guitarra.id === item.id);
        if (itemexiste >= 0) {
          const copiacarro = [...cart];
          copiacarro[itemexiste].quantity++;
          setCart(copiacarro);
        } else {  
          item.quantity = 1; // Asegúrate de que la propiedad quantity esté definida
          setCart([...cart, item]);
        }
      }
    
      function removecart(id) {
        setCart(precart => precart.filter(guitarra => guitarra.id !== id));
      }
    
      function incrementaritems(id) {
        const updatecart = cart.map(item => {
          if (item.id === id && item.quantity < 5) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setCart(updatecart);
      }
    
      function decrementaritems(id) {
        const updatecart2 = cart.map(item => {
          if (item.id === id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCart(updatecart2);
      }
    
      function cleancart() {
        setCart([]);
      }

      const isEmpty = useMemo( () => cart.length === 0, [cart])
      const total = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0),[cart])
    return {
        
        cleancart,
        decrementaritems,
        incrementaritems,
        removecart,
        addCart,
        inicialcart,
        cart,
        data,
        isEmpty,
        total
    }    
}