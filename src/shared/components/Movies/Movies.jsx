import MovieCard from '../MovieCard/MovieCard';
import styles from './Movies.module.scss';
import PropTypes from 'prop-types';

function Movies({ movies, location, locationTo }) {
  const elements = movies.map(({ id, title, poster_path, name }) => (
    <MovieCard
      key={id}
      id={id}
      location={location}
      locationTo={locationTo}
      title={title ?? name}
      posterPath={poster_path}
    />
  ));
  return <ul className={styles.moviesList}>{elements}</ul>;
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(Object),
  location: PropTypes.string,
  locationTo: PropTypes.string,
};

export default Movies;
