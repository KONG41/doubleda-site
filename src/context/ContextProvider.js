import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartPopup, setCartPopup] = useState(false);
  const handleCartPopup = () =>{
    setCartPopup(!cartPopup)
    document.body.style.setProperty('overflow',`${cartPopup ?'auto':'hidden'}`)
  }
  return (
    <StateContext.Provider
        value={{
            cartPopup,
            setCartPopup,
            handleCartPopup
        }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
