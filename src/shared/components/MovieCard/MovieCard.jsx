import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss';
import PropTypes from 'prop-types';
import defaultPhoto from '../../images/no-image.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ id, location, locationTo = '', posterPath, title }) {
  const photo = posterPath ? `${BASE_URL}${posterPath}` : defaultPhoto;
  return (
    <li className={styles.moviesItem}>
      <Link
        className={styles.moviesLink}
        to={`${locationTo}${id}`}
        state={{ from: location }}
      >
        <img width={100} src={photo} alt={title} />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}

MovieCard.protTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string,
  locationTo: PropTypes.string,
  posterPath: PropTypes.string,
  title: PropTypes.string,
};

export default MovieCard;
