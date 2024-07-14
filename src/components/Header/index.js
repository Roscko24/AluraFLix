import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"
import logo from "./LogoMain.png"
import Boton from "../Boton"

function Header() {
    return (
        <header className={styles.cabecera}>
            <NavLink to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </NavLink>
            <div className={styles.navLinks}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                    <Boton text="HOME" />
                </NavLink>
                <NavLink to="/nuevoVideo" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                    <Boton text="NUEVO VIDEO" />
                </NavLink>
            </div>
        </header>
    )
}

export default Header
