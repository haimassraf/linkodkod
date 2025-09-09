import { Outlet } from "react-router"
import '../../style/main.css'
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout