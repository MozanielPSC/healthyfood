import { Header } from "../Header";
import styles from "./styles.module.scss";
import {BiSearch} from "react-icons/bi";
export function FirstBlock() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.body}>
                <div>
                    <p>Ready for Trying a new recipe?</p>
                    <input type="text" placeholder="Search healthy recipes"/><button><BiSearch/></button>
                </div>
            </div>
        </div>
    );
}