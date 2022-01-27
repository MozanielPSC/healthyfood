import styles from "./styles.module.scss";
export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>HealthyFood</h1>
            </div>
            <div className={styles.right}>
                <a>HEALTHY RECIPES</a>
                <a>BLOG</a>
                <a>JOIN</a>
                <a>REGISTER</a>
            </div>
        </div>
    )
}