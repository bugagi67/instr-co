import { CONTACTS_HEADER } from "../../../data/navigationData"
import styles from "./HeaderContacts.module.css"

export const HeaderContact = () => {
    return (
        <div className={styles.contact_header}>
            <h4><a style={{textDecoration: "none", color: "black"}} href={`tel:${CONTACTS_HEADER.phoneNumber}`}>{CONTACTS_HEADER.phoneNumber}</a></h4>
            <a href="mailto: snab@tool-company67.ru">{CONTACTS_HEADER.email}</a>
        </div>
    )
}