import React, { createContext } from 'react'

export const AppContext = createContext();
//? AppContext → data pipe
//? ContextProvider → component that supplies data
const ContextProvider = (props) => {
  const phone = "987654321";
  const name = "Tejas"
  return (
    <AppContext.Provider value={{phone, name}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;
