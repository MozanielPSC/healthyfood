import styles from "./styles.module.scss";
export function FifthBlock() {
    return (
        <>
            <div id="join" className={styles.container}>
                <div className={styles.body}>
                    <div>
                    <p>Join our membership to get special offer</p>
                    <input type="text" placeholder="Enter your email address" /><button>Join</button>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.left}>
                    <small>© Copyrights 2019 Stack. All Rights Reserved. </small>
                </div>
                <div className={styles.right}>
                    <small>Privacy Policy</small>
                    <small>Terms and Conditions</small>
                </div>
            </footer>
        </>
    )
}