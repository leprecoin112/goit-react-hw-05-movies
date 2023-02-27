import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { memo } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { getMovieById } from 'shared/services/TheMovieAPI';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieError from 'shared/components/MovieError/MovieError';
import styles from './Movie.module.scss';
import MovieInfo from './MovieInfo/MovieInfo';

import defaultPhoto from '../../shared/images/no-image.jpg';

export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Movie() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies/';

  const genresToString = genres => {
    let string = '';
    genres.map(({ name }) => (string += name + ' '));
    return string.trim();
  };

  useEffect(() => {
    const fetchMovieById = async id => {
      try {
        const results = await getMovieById(id);
        setMovie(results);
      } catch ({ response }) {
        const message = response.data.status_message;
        console.log(message);
        setError(message);
      }
    };

    fetchMovieById(movieId);
  }, [movieId]);

  const photo = movie?.poster_path
    ? `${BASE_URL}${movie.poster_path}`
    : defaultPhoto;
  return (
    <>
      <div className={styles.wrapper}>
        <Link className={styles.link} to={backLinkHref}>
          &#8592; Go Back
        </Link>
        {error && <MovieError message={error} />}
        {movie && (
          <>
            <MovieDetails
              posterPath={photo}
              title={movie.title}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              overview={movie.overview}
              genres={genresToString(movie.genres)}
            />
            <MovieInfo />
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default memo(Movie);
