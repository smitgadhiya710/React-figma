import React, { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [searchPodcast, setSearchPodcast] = useState("");
  const [loggedUserData, setLoggedUserData] = useState();

  return (
    <div>
      <myContext.Provider value={{ searchPodcast, setSearchPodcast }}>
        {children}
      </myContext.Provider>
    </div>
  );
}

export default ContextProvider;
