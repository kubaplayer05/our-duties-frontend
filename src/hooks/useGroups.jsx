import {GroupsContext} from "../context/groupsContext.jsx";
import {useContext} from "react";

export const useGroups = () => {

    const ctx = useContext(GroupsContext)

    if(!ctx) {
        throw Error("You must use GroupContext inside GroupProvider")
    }

    return ctx
}