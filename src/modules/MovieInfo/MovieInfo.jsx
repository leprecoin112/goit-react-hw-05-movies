import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieInfo.module.scss';
function MovieInfo() {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies/';
  return (
    <div>
      <h2>Additional information</h2>
      <ul className={styles.ListLink}>
        <li>
          <NavLink
            className={styles.link}
            state={{ from: backLinkHref }}
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            state={{ from: backLinkHref }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieInfo;
