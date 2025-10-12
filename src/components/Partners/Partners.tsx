import styles from "./Partners.module.css"
import logoMetrum from "../../assets/logo_partners/logo_metrum.png"
import logoMiro from "../../assets/logo_partners/logo_miro.png"
import logoGrazhdan from "../../assets/logo_partners/logo_grazhdan.png"
import logoPrem from "../../assets/logo_partners/logo_prem.png"
import logoBts from "../../assets/logo_partners/logo_bts.png"
import logoSmetanino from "../../assets/logo_partners/17_SVG.svg"
import logoTranzit from "../../assets/logo_partners/logo_tranzit.jpg"
import logoKoblik from "../../assets/logo_partners/Koblik.svg"
import logoBem from "../../assets/logo_partners/BEM.svg"
import logoSmolStrom from "../../assets/logo_partners/smolStrom.svg"
import logoAnkar from "../../assets/logo_partners/ankar.svg"
import logoGer from "../../assets/logo_partners/logo_ger.png"

export const Partners = () => {
    return (
        <div className={styles.partners} id="trusted">
            <h4>Нам доверяют</h4>
            <div className={styles.wrapper}>
                <img src={logoKoblik} alt="Коблик групп" />
                <img src={logoGer} alt="Геррус" />
                <img src={logoMiro} alt="Компания МИРО" />
                <img src={logoBem} alt="БалтЭнергоМаш" />
                <img src={logoSmetanino} alt="Сметанино" />
                <img src={logoBts} alt="БТС" />
                <img src={logoAnkar} alt="Анкар" />
                <img src={logoPrem} alt="Премьер авто" />
                <img src={logoTranzit} alt="Транзит" />
                <img src={logoMetrum} alt="Метрум групп" />
                <img src={logoSmolStrom} alt="СмолСтромСервис" />
                <img src={logoGrazhdan} alt="Гражданстрой" />
            </div>
        </div>
    )
}