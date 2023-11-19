import styles from'./cyber.module.css'
import cyber from './Cyberpunk-2077-Logo.png';
export default function Card4() {
    return <>
      <div className={styles.cont4}>
    <div className={styles.card4}>
        <img src={cyber} id={styles.logo4} />
        <p className={styles.dispo4}>DISPONIBLE </p>
        <p className={styles.textGame4}>
        Dans la peau de V, mercenaire aux améliorations
         cybernétiques, plongez dans une mission d'espionnage
         intense et sauvez la présidente de l...
        </p>
        <p className={styles.prix4}>
            le prix de départ :  <span id={styles.span4}>26,99 $US</span>
        </p>
        <div className={styles.btnAchete4}>
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}