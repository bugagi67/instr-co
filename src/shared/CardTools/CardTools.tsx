import { ListCategory } from "./ListCategory/ListCategory"
import styles from "./CardTools.module.css"

type ToolType = "production" | "construction" | "car_service";

type Props = {
    type: ToolType;
};

export const CardTools: React.FC<Props> = ({item}) => {
    return (
        <div style={{ marginBottom: '40px' }}>
            <div className={styles.card_tools } id="container">
                <h4>{item[1].name}</h4>
                <ListCategory list={item[1].list} />
            </div>
        </div>
    )
}