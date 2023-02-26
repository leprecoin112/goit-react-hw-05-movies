import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBarList}>
        <li>
          <NavLink className={styles.Link} to="/goit-react-hw-05-movies/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.Link} to="/goit-react-hw-05-movies/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
