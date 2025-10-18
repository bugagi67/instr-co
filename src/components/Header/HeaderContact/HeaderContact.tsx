import { CONTACTS_HEADER } from "../../../data/navigationData"
import styles from "./HeaderContacts.module.css"

export const HeaderContact = () => {
    return (
        <div className={styles.contact_header}>
            <div className={styles.header_contacts}>
                <h4>
                    <a href={`tel:${CONTACTS_HEADER.phoneNumber}`} className={styles.phone_link}>
                        {CONTACTS_HEADER.phoneNumber}
                    </a>
                </h4>
                <a href="mailto: snab@tool-company67.ru">
                    {CONTACTS_HEADER.email}
                </a>
            </div>
        </div>
    )
}