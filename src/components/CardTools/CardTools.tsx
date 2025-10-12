import { ListCategory } from "./ListCategory/ListCategory"
import { CATEGORY_TOOLS_DATA } from "../../data/categoryToolsData"
import styles from "./CardTools.module.css"

type ToolType = "production" | "construction" | "car_service";

type Props = {
    type: ToolType;
};

export const CardTools: React.FC<Props> = ({ type }) => {
    return (
        <div>
            <div className={type === "production" ? styles.card_tools_production : type === "construction" ? styles.card_tools_construction : styles.card_tools_car_service} id="container">
                <h4>{type === "production" ? CATEGORY_TOOLS_DATA.productionName : type === "construction" ? CATEGORY_TOOLS_DATA.constructionName : CATEGORY_TOOLS_DATA.car_serviceName}</h4>
                <ListCategory list={type === "production" ? CATEGORY_TOOLS_DATA.production : type === "construction" ? CATEGORY_TOOLS_DATA.construction : CATEGORY_TOOLS_DATA.car_service} />
            </div>
        </div>
    )
}