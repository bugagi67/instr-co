import logo from "../../assets/logo/logoNotBack.png"

export type STYLE = {
    style: {
        width: string
    }
}

export const Logo = ({ style }: STYLE) => {
    return (
        <div>
            <a href="/"><img style={{ width: `${style.width}`, marginLeft: "-65px" }} src={logo} alt="Логотип" /></a>
        </div>
    )
}