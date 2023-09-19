import {createContext, useReducer} from "react";
import {getCookie} from "../utils/cookie.jsx";

export const AuthContext = createContext(null)

const reducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return {
                user: {...action.payload}
            }
        case "LOGOUT":
            return {
                user: null
            }
    }
}

const createInitialState = () => {
    try {
        const user = getCookie("user")
        const json = JSON.parse(user)
        return {user: {...json}}
    } catch {
        return {user: null}
    }
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        user: null
    }, createInitialState)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}