import styles from "./styles.module.scss";
import 'animate.css';
import { GoThreeBars } from "react-icons/go";
import { IconContext } from "react-icons";
import { useState } from "react";
import Link from "next/link";

export function Header() {
    const [mobileNav, setMobileNav] = useState(false);
    const [style, setStyle] = useState(styles.mobileNav);
    function showMobileNav() {
        if (mobileNav) {
            setStyle(styles.mobileNav)
            setMobileNav(false);
        } else {
            setMobileNav(true);
            setStyle(styles.mobileNavActive + " animate__animated animate__fadeInRight")
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className="animate__animated animate__fadeInRight">HealthyFood</h1>
            </div>
            <div className={styles.right}>
                <a>HEALTHY RECIPES</a>
                <a>BLOG</a>
                <a>JOIN</a>
                <Link href={"/register"}>
                    <a className={styles.last}>REGISTER</a>
                </Link>
                <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                        <GoThreeBars onClick={showMobileNav} />
                    </div>
                </IconContext.Provider>
            </div>
            <div className={style}>
                <ul>
                    <li>
                        HEALTHY RECIPES
                    </li>
                    <li>
                        BLOG
                    </li>
                    <li>
                        JOIN
                    </li>
                    <li className={styles.last}>
                        <a>REGISTER</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}