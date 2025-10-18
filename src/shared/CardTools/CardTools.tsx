import { ListCategory } from "./ListCategory/ListCategory"
import styles from "./CardTools.module.css"

export const CardTools = ({item}: any) => {
    return (
        <div style={{ marginBottom: '40px' }}>
            <div className={styles.card_tools } id="container">
                <h4>{item[1].name}</h4>
                <ListCategory list={item[1].list} />
            </div>
        </div>
    )
}