import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieById } from 'shared/services/TheMovieAPI';
import MovieDetails from 'modules/MovieDetails/MovieDetails';
import MovieError from 'shared/components/MovieError/MovieError';
import MovieInfo from 'modules/MovieInfo/MovieInfo';
import defaultPhoto from '../../shared/images/no-image.jpg';
import styles from './MoviePage.module.scss';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MoviePage() {
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
    <main>
      <section>
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
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default MoviePage;
