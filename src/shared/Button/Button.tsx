import styles from "./Button.module.css"

type ButtonType = {
    title: string;
    styleType: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

export const Button = ({ title, styleType, onClick }: ButtonType) => {
    return (
        <button onClick={onClick} className={styles[styleType]}>
            {title}
        </button >
    )
}