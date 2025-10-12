import styles from "./MainBanner.module.css"
import { Button } from "../../../shared/Button/Button"

export const MainBanner = () => {
    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }


    return (
        <div className={styles.main_banner}>
            <div className={styles.content_banner}>
                <div className={styles.title} id="container">
                    <h1>Комплексные поставки инструмента, <br />оборудования и расходных материалов для промышленности,<br /> строительства и СТО.</h1>
                </div>
                <Button title="Ассортимент" styleType="main_button" onClick={() => handleClick("assortment")} />
            </div>

        </div>
    )
}