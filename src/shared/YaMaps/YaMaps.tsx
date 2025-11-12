import styles from "./YaMaps.module.css";

export const YaMaps = () => {
  return (
    <div className={styles.map_container}>
      <a
        href="https://yandex.ru/maps/12/smolensk/?utm_medium=mapframe&utm_source=maps"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
      >
        Смоленск
      </a>
      <a
        href="https://yandex.ru/maps/12/smolensk/house/ulitsa_shevchenko_87b/Z0sYdg9nSEwEQFtufXt5cnVnYA==/?ll=32.088112%2C54.784055&utm_medium=mapframe&utm_source=maps&z=18.32"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
      >
        Смоленск, улица Шевченко, 87Б — Яндекс Карты
      </a>

      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=32.088112%2C54.784055&mode=whatshere&whatshere%5Bpoint%5D=32.086990%2C54.783841&whatshere%5Bzoom%5D=17&z=18.32"
        style={{
          width: "100%",
          aspectRatio: "4 / 4",
          border: 0,
          position: "relative",
        }}
        allowFullScreen
        loading="lazy"
        title="Яндекс Карты — Смоленск, улица Шевченко, 87Б"
      />
    </div>
  );
};
