import styles from "./Footer.module.css"
import { YaMaps } from "../../shared/YaMaps/YaMaps"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper_footer} id="contacts">
                <h4 className={styles.title}>Контакты</h4>
                <div className={styles.contact_content}>
                    <YaMaps />
                    <div className={styles.text_content_wrapper}>
                        <h5>Адрес</h5>
                        <p className={styles.text}>г. Смоленск, ул. Соболева д.38А</p>
                        <br />
                        <h5>Почта</h5>
                        <a className={styles.text} href="mailto:snab@tool-company67.ru">snab@tool-company67.ru</a>
                        <br />
                        <br />

                        <h5>Телефон</h5>
                        <a className={styles.text_phone} href="tel:+79525371199">+7-952-537-11-99</a>
                        <br />
                        <br />

                        <h5>ООО "Инструмент компани"</h5>
                        <p className={styles.text}>ИНН: 6732244165</p>
                        <p className={styles.text}>КПП: 673201001</p>
                        <p className={styles.text}>ОГРН: 1236700003209</p>
                        <p className={styles.text}>Фактический адрес: г. Смоленск, ул. Шевченко, 87Б</p>
                    </div>
                </div>
            </div>
        </div >
    )
}