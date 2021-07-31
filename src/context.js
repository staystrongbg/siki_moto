import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const greetings = 'hello from contextAPI! more is coming...';

  return (
    <AppContext.Provider value={{ greetings }}>{children}</AppContext.Provider>
  );
};

//custon hook | import useGlobalContext instead AppContext
// export const useGlobalContext = ()=>{
//   return useContext(AppContext)
// }

export { AppContext, AppProvider };
