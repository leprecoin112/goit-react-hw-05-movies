import { NavLink } from 'react-router-dom';
import styles from './MovieInfo.module.scss';
function MovieInfo() {
  return (
    <div>
      <h2>Additional information</h2>
      <ul className={styles.ListLink}>
        <li>
          <NavLink className={styles.link} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieInfo;
