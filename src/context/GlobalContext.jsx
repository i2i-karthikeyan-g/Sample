import { createContext, useState } from "react";

export const GlobalContext = createContext({
    isBlockNavigation: false,
});

export const GlobalContextProvider = (props) => {

    const [value, setValue] = useState({ isBlockNavigation: false });


    return (
        <GlobalContext.Provider value={{ value, setValue }}>
            {props.children}
        </GlobalContext.Provider>)
}