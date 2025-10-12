export const YaMaps = () => {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <a href="https://yandex.ru/maps/12/smolensk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Смоленск</a>
            <a href="https://yandex.ru/maps/12/smolensk/house/ulitsa_soboleva_38a/Z0sYdgBhTUwGQFtufXt4cHhkYg==/inside/?from=mapframe&ll=32.071491%2C54.791476&tab=inside&utm_medium=mapframe&utm_source=maps&z=17" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Организации внутри: Смоленск, улица Соболева, 38А — Яндекс Карты</a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=32.071491%2C54.791476&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=32.071491%2C54.791476&whatshere%5Bzoom%5D=17&z=17"
                width={1070}
                height={600}
                style={{ position: "relative", border: "0" }}
                allowFullScreen
                loading="lazy"
                title="Яндекс Карты — Смоленск, улица Соболева, 38А"
            />
        </div>
    )
}