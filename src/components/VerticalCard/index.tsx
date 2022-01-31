import styles from "./styles.module.scss"

interface CardProps {
    imglabel: string,
    text: string,
    profileimg: string,
    username: string
}
export function VerticalCard(props: CardProps) {
    return (
        <div className={styles.card}>
            <img src={props.imglabel} />
            <h3>{props.text}</h3>
            <div className={styles.footer}>
                <img src={props.profileimg} />
                <span>{props.username}</span>
            </div>
        </div>
    )
}