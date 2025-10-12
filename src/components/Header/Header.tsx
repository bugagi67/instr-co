import { Logo } from "../../shared/Logo/Logo"
import { Navigation } from "./Navigation/Navigation"
import { MainBanner } from "./MainBanner/MainBanner"
export { MainBanner } from "./MainBanner/MainBanner"
import { HeaderContact } from "./HeaderContact/HeaderContact"
import styles from "./Header.module.css"

const LogoStyle = {
    width: "400px"
}

export const Header = () => {
    return (
        <>
            <div className={styles.header} id="header">
                <Logo style={LogoStyle} />
                <Navigation />
                <HeaderContact />
            </div>
            <MainBanner />
        </>
    )
}