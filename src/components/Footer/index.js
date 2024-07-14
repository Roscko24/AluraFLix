import styles from "./Footer.module.css"
import logo from "./LogoMain.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo Alura" />
            </section>
        </footer>
    )
}

export default Footer