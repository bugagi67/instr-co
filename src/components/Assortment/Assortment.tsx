import { CardTools } from "../CardTools/CardTools"
import styles from "./Assortment.module.css"

export const Assortment = () => {
    return (
        <div id="assortment">
            <h4 className={styles.title}>Ассортимент</h4>
            <div className={styles.assortment}>
                <CardTools type={"production"} />
                <CardTools type={"construction"} />
                <CardTools type={"car_service"} />
            </div>
        </div>
    )
}