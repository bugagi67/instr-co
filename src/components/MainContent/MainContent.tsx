import { Assortment } from "../Assortment/Assortment"
import styles from "./MainContent.module.css"

export const MainContent = () => {
  return (
    <section className={ styles.assortment_section }>
      <Assortment/>
    </section>
  )
}