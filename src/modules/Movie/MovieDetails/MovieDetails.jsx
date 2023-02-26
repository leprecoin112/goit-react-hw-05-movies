import styles from './MovieDetails.module.scss';
import PropTypes from 'prop-types';

function MovieDetails({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  overview,
  genres,
}) {
  return (
    <div className={styles.movieDetails}>
      <img width={300} src={posterPath} alt={title} />
      <div>
        <h2 className={styles.movieTitle}>
          {title} ({releaseDate})
        </h2>
        <p>Vote average: {voteAverage}</p>
        <h3 className={styles.moviePreTitle}>Overview</h3>
        <p>{overview}</p>
        <h3 className={styles.moviePreTitle}>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieDetails;
