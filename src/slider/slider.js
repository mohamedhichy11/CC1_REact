import { useState, useContext, useEffect } from "react";
import { useDarkMode } from '../contextDark/contextDark';

import Card1 from "../cards/card1/card1";
import Card2 from "../cards/card2/card2";
import Card3 from "../cards/card3/card3";
import Card4 from "../cards/card4/card4";
import styles from "./slider.module.css";

export default function Slider() {
  const arrayCards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isDark } = useDarkMode(); 

  useEffect(() => {
  
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  const nextcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayCards.length);
  };

  const prevcard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayCards.length - 1 : prevIndex - 1
    );
  };

  const buttonStyles = {
    backgroundColor: isDark ? "#fff" : "#000",  
    color: isDark ? "#000" : "#fff", 
  };
  const fleshStyles = {
    color: isDark ? "#000"  : "#fff",  
  };

  return (
    <div className={styles.content}>
      <div className={styles.divbtn1}>
        <button onClick={prevcard} className={styles.Prevbtn} style={buttonStyles}>
          <i className="fa-solid fa-arrow-left" id={styles.Prevbtn} style={fleshStyles}></i>
        </button>
      </div>

      <div className={styles.Div1}>{arrayCards[currentIndex]}</div>

      <div className={styles.divbtn2}>
        <button onClick={nextcard} className={styles.nextbtn} style={buttonStyles}>
          <i className="fa-solid fa-arrow-right" id={styles.nextbtn} style={fleshStyles}></i>
        </button>
      </div>
    </div>
  );
}
