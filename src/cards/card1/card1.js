
import styles from  './fc24.module.css'
import fc24 from './jj.png';
export default function Card1() {
    return <>
      <div className={styles.cont1}>
    <div className={styles.card1}>
        <img src={fc24} id={styles.logo1} />
        <p className={styles.dispo1}>DISPONIBLE DÈS MAINTENANT </p>
        <p className={styles.textGame1}>
            EA SPORTS FC™ 24 vous plonge au coeur  de
             The World’s Game pour vous offrir le jeu 
             de football le plus réaliste au monde .
        </p>
        <p className={styles.prix1}>
            le prix de départ :  <span id={styles.span1}>70 $US</span>
        </p>
        <div className={styles.btnAchete1}>
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}