import { HorizontalCard } from "../HorizontalCard";
import styles from "./styles.module.scss";
export function SecondBlock() {
    const card1 = {
        img: "/images/comida_1.svg",
        title:'Brocoli Salad with Bacon'
    }
    const card2 = {
        img: "/images/comida_2.svg",
        title:'Classic Beef Burgers'
    }
    const card3 = {
        img: "/images/comida_3.svg",
        title:'Classic Potato Salad'
    }
    const card4 = {
        img: "/images/comida_4.svg",
        title:'Cherry Cobbler on the Grill'
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Our Best Recipes</h1>
                <p>Far far away behind the word mountains, far from the countries Vakalia and Consonantia, there live the blind texts. </p>
            </div>
            <div className={styles.gridContainer}>
               <HorizontalCard title={card1.title} img={card1.img}/>
               <HorizontalCard  title={card2.title} img={card2.img}/>
               <HorizontalCard  title={card3.title} img={card3.img}/>
               <HorizontalCard  title={card4.title} img={card4.img}/>
            </div>
        </div>
    )
}