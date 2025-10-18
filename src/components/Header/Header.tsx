import { Logo } from "../../shared/Logo/Logo"
import { Navigation } from "./Navigation/Navigation"
import { MainBanner } from "./MainBanner/MainBanner"
import { HeaderContact } from "./HeaderContact/HeaderContact"
import styles from "./Header.module.css"

export { MainBanner } from "./MainBanner/MainBanner"

export const Header = () => {
  return (
    <>
      <div className={ styles.header }>
        <Logo/>
        <Navigation/>
        <HeaderContact/>
      </div>
      <MainBanner/>
    </>
  )
}