import { VerticalCard } from "../VerticalCard";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"


export function FourthBlock() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Read Our Blog</h1>
          <p>Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts</p>
        </div>
        <div className={styles.carousel} ref={carousel}>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <div className={styles.buttons}>
            <button onClick={handleLeftClick}>
              <BsArrowLeft />
            </button>
            <button onClick={handleRightClick}>
              <BsArrowRight />
            </button>
          </div>
        </div>

      </div>

    </>
  )
}