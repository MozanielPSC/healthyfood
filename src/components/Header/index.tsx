import styles from "./styles.module.scss";
import 'animate.css';
import { GoThreeBars } from "react-icons/go";
import { IconContext } from "react-icons";
import { useState } from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

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
                <Scroll to="recipes" smooth={true} duration={1000}>
                    <a>HEALTHY RECIPES</a>
                </Scroll>
                <Scroll to="blog" smooth={true} duration={1000}>
                    <a>BLOG</a>
                </Scroll>
                <Scroll to="join" smooth={true} duration={1000}>
                    <a>JOIN</a>
                </Scroll>
                <Link href={"/register"}>
                    <a className={styles.last}>REGISTER</a>
                </Link>
                <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                        <GoThreeBars className={styles.bars} onClick={showMobileNav} />
                    </div>
                </IconContext.Provider>
            </div>

            <div className={style}>
                <ul>
                    <Scroll onClick={showMobileNav} to="recipes" smooth={true} duration={1000}>
                        <li>
                            HEALTHY RECIPES
                        </li>
                    </Scroll>
                    <Scroll onClick={showMobileNav} to="blog" smooth={true} duration={1000}>
                        <li>
                            BLOG
                        </li>
                    </Scroll>
                    <Scroll onClick={showMobileNav} to="join" smooth={true} duration={1000}>
                        <li>
                            JOIN
                        </li>
                    </Scroll>
                    <li className={styles.last}>
                        <Link href={"/register"}>
                            <a>REGISTER</a>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}