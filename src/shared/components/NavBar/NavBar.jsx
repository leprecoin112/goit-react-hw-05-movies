import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBarList}>
        <li>
          <NavLink className={styles.Link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.Link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
