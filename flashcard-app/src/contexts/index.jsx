import React, { useState, useContext, createContext } from "react";

const tokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState()
    

    return (
        <tokenContext.Provider value={{ token, setToken }}>
            {children}
        </tokenContext.Provider>
    );
};

export const useToken = () => useContext(tokenContext);