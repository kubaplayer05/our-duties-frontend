import {useContext} from "react";
import {AuthContext} from "../context/authContext.jsx";

export const useAuth = () => {

    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw Error("You must use authContext inside AuthProvider")
    }

    return ctx
}