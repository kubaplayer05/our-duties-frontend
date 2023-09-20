import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {

    return (
        <>
            <Navbar/>
            <main className="min-h-fit">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout