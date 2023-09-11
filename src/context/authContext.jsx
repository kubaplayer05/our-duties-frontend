import {createContext, useReducer} from "react";

export const AuthContext = createContext(null)

const reducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return action.payload
        case "LOGOUT":
            return null
    }
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        user: null
    })

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}