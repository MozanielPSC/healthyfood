import { VerticalCard } from "../VerticalCard";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"


export function FourthBlock() {
  const [style, setStyle] = useState(styles.disabled);
  const card1 = {
    text:"Quick-start guide to nuts and seeds",
    username:"Kevin Ibrahim",
    profileimg:"/images/perfil.jpg",
    imglabel: "/images/blog_image_1.svg",  
  }
  const card2 = {
    text:"Nutrition: Tips for Improving Your Health",
    username:"Mike Jackson",
    profileimg:"/images/perfil2.jpg",
    imglabel: "/images//bloco_image_2.svg",  
  }
  const card3 = {
    text:"The top 10 benefits of eating healthy",
    username:"Bryan McGregor",
    profileimg:"/images/perfil3.jpg",
    imglabel: "/images//bloco_image_3.svg",  
  }
  const card4 = {
    text:"What Means to Be An Healthy Person",
    username:"Kevin Ibrahim",
    profileimg:"/images/perfil4.jpg",
    imglabel: "/images//bloco_image_4.svg",  
  }
  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setStyle(styles.active);
  };
  return (
    <>
      <div id="blog" className={styles.container}>
        <div>
          <h1>Read Our Blog</h1>
          <p>Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts</p>
        </div>
        <div className={styles.carousel} ref={carousel}>
          <VerticalCard imglabel={card1.imglabel} profileimg={card1.profileimg} text={card1.text} username={card1.username} />
          <VerticalCard  imglabel={card2.imglabel} profileimg={card2.profileimg} text={card2.text} username={card2.username}/>
          <VerticalCard  imglabel={card3.imglabel} profileimg={card3.profileimg} text={card3.text} username={card3.username}/>
          <VerticalCard  imglabel={card4.imglabel} profileimg={card4.profileimg} text={card4.text} username={card4.username}/>
          <div className={styles.buttons}>
            <button onClick={handleLeftClick} className={style}>
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