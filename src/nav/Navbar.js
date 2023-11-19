import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useDarkMode } from '../contextDark/contextDark';
import { useState } from 'react';

export default function NavBar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  const mystyles = () => {
    if (isDark) {
      return {
        color: '#fff',
        backgroundColor: '#000',
        classna: 'fa-solid fa-sun',
      };
    } else {
      return {
        color: '#fff',
        backgroundColor: 'rgb(179, 116, 237)',
        classna: 'fa-regular fa-moon',
      };
    }
  };

  const Moon_sun = () => {
    if (isDark) {
      return {
        color: '#000',
        backgroundColor: '#000',
        classna: 'fa-solid fa-sun',
      };
    } else {
      return {
        color: 'rgb(179, 116, 237)',
        backgroundColor: 'rgb(179, 116, 237)',
        classna: 'fa-regular fa-moon',
      };
    }
  };

  return (
    <header style={{ color: mystyles().color, backgroundColor: mystyles().backgroundColor }}>
      <Link to="/" className={styles.logo}>
        HOME
      </Link>
      <a href="#" onClick={toggleNav} className={styles.bars}>
        <i className="fa-solid fa-bars"></i>
      </a>
      <nav className={`${styles.navigation} ${isNavActive ? styles.active : ''}`} style={{ color: mystyles().color, backgroundColor: mystyles().backgroundColor }}>
        <a href="#">
          <i
            className={mystyles().classna}
            onClick={toggleDarkMode}
            id={styles.modePage}
            style={{ color: Moon_sun().color }}
          ></i>
        </a>
        <Link to="/silder">SLIDER TP</Link>
        <Link to="/calculator">CALCULATOR</Link>
        <Link to="/TODOLIST">TO DO LIST</Link>
        <Link to="/listeProduct">API TP</Link>
      </nav>
    </header>
  );
}
