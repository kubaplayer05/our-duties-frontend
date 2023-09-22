import {createContext, useReducer} from "react";

export const GroupsContext = createContext(null)

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_GROUP":
            return {groups: [...state.groups, action.payload]}
        case "ADD_GROUPS":
            return {groups: action.payload}
        default:
            return {groups: []}
    }
}

export const GroupsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {groups: []})

    return (
        <GroupsContext.Provider value={{state, dispatch}}>
            {children}
        </GroupsContext.Provider>
    )
}