import { useReducer, createContext } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext();

let data = {
    user: "Ameen",
    cart: []
}

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}