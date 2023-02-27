import PropTypes from 'prop-types';
import defaultPhoto from '../../shared/images/no-image.jpg';
import styles from './MovieCast.module.scss';
export const BASE_URL = 'https://image.tmdb.org/t/p/w500';
function MovieCast({ fullName, character, img }) {
  const photo = img ? `${BASE_URL}${img}` : defaultPhoto;
  return (
    <li>
      <img className={styles.img} width={200} src={photo} alt={fullName} />
      <ul>
        <li>
          <p className={styles.fullName}>{fullName}</p>
          <p>Character: {character}</p>
        </li>
      </ul>
    </li>
  );
}

MovieCast.propTypes = {
  fullName: PropTypes.string,
  character: PropTypes.string,
  img: PropTypes.string,
};

export default MovieCast;
