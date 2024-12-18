import React, { createContext, useState, useContext } from 'react';

// Create the context
const MyContext = createContext();

// Custom hook to use the context
const useMyContext = () => useContext(MyContext);

const MyProvider = ({ children }) => {
    const [state, setState] = useState("Hello");
  
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  
  export default MyProvider;
  
