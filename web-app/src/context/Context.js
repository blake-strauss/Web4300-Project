import {createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetch: false,
    error:false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dis] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider 
        value={{
            user: state.user, 
            isFetch: state.isFetch,
            error: state.error,
            dis, 
            }}
            >{children}</Context.Provider>
    );
};