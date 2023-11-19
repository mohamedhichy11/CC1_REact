import styles from'./wich.module.css'
import wich from './logo_wichfire.png';
export default function Card3() {
    return <>
      <div className={styles.cont3}>
    <div className={styles.card3}>
        <img src={wich} id={styles.logo3} />
        <p className={styles.dispo3}>DISPONIBLE </p>
        <p className={styles.textGame3}>
        Avec des armes étranges et de la magie interdite, 
        chassez une puissante sorcière qui est la clé de votre salut.
        </p>
        <p className={styles.prix3}>
            le prix de départ :  <span id={styles.span3}>10,39 $US</span>
        </p>
        <div className={styles.btnAchete3}>
            ACHETER MAINTENANT
        </div>
    </div>
   </div></>
}