import styles from'./assasin.module.css'
import logoass from './MIRAGE_LOGO.webp'
export default function Card2() {
    return <>
      <div className={styles.cont2}>
    <div className={styles.card2}>
        <img src={logoass} id={styles.logo2} />
        <p className={styles.dispo2}>DISPONIBLE  </p>
        <p className={styles.textGame2}>
        Découvrez l'histoire de Basim, un voleur habile en quête de
         réponses et de justice dans les rues du Bagdad du IXe siècle.
        </p>
        <p className={styles.prix2}>
            le prix de départ :  <span id={styles.span2}>50 $US</span>
        </p>
        <div className={styles.btnAchete2}>
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
   }