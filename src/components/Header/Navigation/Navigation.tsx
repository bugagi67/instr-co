import { navigationData } from "../../../data/navigationData"
import { handleClick } from "../../../utils/handleClickScroll"
import styles from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={styles.navigation} style={{ display: "flex", gap: "40px" }}>
            {navigationData.map((item) => (
                <button key={item.id} onClick={() => handleClick(item.id)}>
                    {item.label}
                </button>
            ))}
        </nav>
    )
}