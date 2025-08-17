import { createContext, useState } from "react";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const token = true;

  const [ tokenState, setTokenState ] = useState(token);
  
  return (
    <AccountContext.Provider value={{ tokenState, setTokenState }}>
      {children}
    </AccountContext.Provider>
  );
};
export default UserContext;
