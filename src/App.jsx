import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {useAuth} from "./hooks/useAuth.jsx";

const App = () => {

    const {user} = useAuth()

    const router = createBrowserRouter([
        {
            path: "/",
            element: user ? <h1 className="text-lg">Witaj</h1> : <Navigate to="/login"/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/signup",
            element: <Signup/>,
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App