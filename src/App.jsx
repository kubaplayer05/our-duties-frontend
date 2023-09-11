import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1 className="text-lg">Witaj</h1>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/signup",
            element: <h1>Rejestrowanie</h1>,
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App