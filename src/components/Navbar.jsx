import {useAuth} from "../hooks/useAuth.jsx";
import Button from "./ui/Button.jsx";


const Navbar = () => {

    const {state, dispatch} = useAuth()

    const logout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <header className="w-full bg-white py-4">
            <div className="max-w-[1200px] flex justify-between items-center mx-auto">
                <h1 className="text-xl font-semibold">
                    <span className="text-yellow-500">Our </span>
                    <span className="text-green-600">Duties</span>
                </h1>
                <div className="flex gap-10 items-center">
                    <p>{state.user.name}</p>
                    <Button onClick={logout}>Wyloguj się</Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar