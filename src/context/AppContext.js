import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: 'John Doe' });
//   return (
//     <AppContext.Provider value={{ user, setUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
