import styles from "./AboutAs.module.css"
import { CertificatesCarousel } from "./CertificatesCarousel/CertificatesCarousel"
import cert1 from "../../assets/certs/JTC.jpg"
import cert2 from "../../assets/certs/MILWAUKEE сертификат дилера Инструмент компани.jpg"
import cert3 from "../../assets/certs/Sturm.png"
import cert4 from "../../assets/certs/hanskonner.jpg"
import cert5 from "../../assets/certs/Мастак.jpg"
import cert6 from "../../assets/certs/Родмикс.jpg"
import cert7 from "../../assets/certs/Сертификат дилера Инстурмент компани 2024.jpg"
import cert8 from "../../assets/certs/Стройсистема.jpg"




export const AboutAs = () => {
    const certs = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];

    return (
        <main id="about" className={styles.about_as}>
            <h4>О нас</h4>
            <p>ООО «Инструмент Компани» — надёжный поставщик инструмента, оснастки и оборудования для предприятий, строительных организаций и автосервисов. Мы специализируемся на комплексных поставках — от ручного и электроинструмента до средств индивидуальной защиты и промышленной химии. <br />
                <br />
                Работаем напрямую с дистрибьюторами и официальными представителями ведущих мировых брендов, что позволяет предлагать нашим клиентам оригинальную продукцию по конкурентным ценам.<br />
                <br />

                Главная цель компании — обеспечить каждое предприятие всем необходимым для эффективной, безопасной и бесперебойной работы. Мы ценим долгосрочные отношения, индивидуальный подход и внимательное отношение к задачам каждого клиента.<br />
                <br />
                ООО «Инструмент Компани» — ваш надёжный партнёр в обеспечении производства, стройки и автосервиса качественным инструментом и оборудованием.</p>

            <section style={{ marginTop: 24 }}>
                <h4 style={{fontSize: "40px", padding: "60px 10px 20px"}}>Наши сертификаты</h4>
                <CertificatesCarousel images={certs} autoPlay={true} autoPlayInterval={4500} />
            </section>
        </main>
    )
}

