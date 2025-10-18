import { CardTools } from "../../shared/CardTools/CardTools"
import { CATEGORY_TOOLS_DATA } from "../../data/categoryToolsData"
import styles from "./Assortment.module.css"

export const Assortment = () => {
    console.log(Object.entries(CATEGORY_TOOLS_DATA))
    return (
        <div id="assortment">
            <h4 className={styles.title}>Ассортимент</h4>
            <div className={styles.assortment}>
            {Object.entries(CATEGORY_TOOLS_DATA).map((item, id) => {
                return <CardTools key={id} item={item}/>
            } )}
            </div>
        </div>
    )
}