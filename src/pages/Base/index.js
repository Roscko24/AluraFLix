import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"

function Base() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Base