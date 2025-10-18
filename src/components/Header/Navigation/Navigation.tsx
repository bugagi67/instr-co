import { useState, useEffect } from "react"
import { navigationData } from "../../../data/navigationData"
import { handleClick } from "../../../utils/handleClickScroll"
import styles from "./Navigation.module.css"

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (id: string) => {
        handleClick(id)
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }, [isOpen])

    return (
        <div>
          <div className={styles.navContainer}>
            <button 
                className={styles.mobileMenuBtn}
                onClick={toggleMenu}
                aria-label="Меню"
            >
                {isOpen ? '✕' : '☰'}
            </button>
            <nav className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''}`}>
                {navigationData.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => handleLinkClick(item.id)}
                        className={styles.navButton}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
          </div>
        </div>
    )
}