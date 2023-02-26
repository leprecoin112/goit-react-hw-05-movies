import img from './error_movie.jpg';
import styles from './MovieError.module.scss';
import PropTypes from 'prop-types';
function MovieError({ message }) {
  return (
    <div className={styles.error}>
      <img src={img} alt="The movie was not found" />
      <p>{message}</p>
    </div>
  );
}

MovieError.propTypes = {
  message: PropTypes.string,
};

export default MovieError;
