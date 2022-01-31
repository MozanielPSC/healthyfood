import styles from "./styles.module.scss"

export function VerticalCard() {
    return (
        <div className={styles.card}>
            <img src="/images/blog_image_1.svg" />
            <h2>Quick-start guide
                to nuts and seeds</h2>
            <div className={styles.footer}>
                <img src="/images/perfil2.jpg" />
                <span>Kevin Ibrahim</span>
            </div>
        </div>
    )
}