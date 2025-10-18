import logo from "../../assets/logo/LOGO.png"
import styles from "./Logo.module.css"

export const Logo = () => {
    return (
        <div>
            <a href="/"><img className={styles.img_logo} src={logo} alt="Логотип" /></a>
        </div>
    )
}