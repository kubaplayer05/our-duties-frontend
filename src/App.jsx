import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {useAuth} from "./hooks/useAuth.jsx";

const App = () => {

    const {state} = useAuth()

    const router = createBrowserRouter([
        {
            path: "/",
            element: state.user ? <h1 className="text-lg">Witaj</h1> : <Navigate to="/login"/>,
        },
        {
            path: "/login",
            element: !state.user ? <Login/> : <Navigate to="/"/>,
        },
        {
            path: "/signup",
            element: !state.user ? <Signup/> : <Navigate to="/"/>,
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App