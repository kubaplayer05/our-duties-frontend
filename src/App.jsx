import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {useAuth} from "./hooks/useAuth.jsx";
import Layout from "./layout/Layout.jsx";
import MainDashboard from "./pages/MainDashboard.jsx";
import GroupsList from "./components/GroupsList.jsx";

const App = () => {

    const {state} = useAuth()

    const router = createBrowserRouter([
        {
            path: "/",
            element: state.user ? <Layout/> : <Navigate to="/login"/>,
            children: [
                {
                    path: "/",
                    element: <MainDashboard/>
                }
            ]
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