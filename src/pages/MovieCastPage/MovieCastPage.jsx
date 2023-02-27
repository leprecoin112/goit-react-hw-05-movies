import MovieCast from 'modules/MovieCast/MovieCast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'shared/services/TheMovieAPI';
import styles from './MovieCastPage.module.scss';

function MovieCastPage() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCastById = async id => {
      try {
        const results = await getMovieCastById(id);
        setCast(results.cast);
      } catch ({ response }) {
        const message = response.data.status_message;
        console.log(message);
      }
    };

    fetchMovieCastById(movieId);
  }, [movieId]);

  const elements = cast.map(({ name, character, profile_path }, index) => (
    <MovieCast
      key={index}
      fullName={name}
      character={character}
      img={profile_path}
    />
  ));

  return (
    <section>
      <ul className={styles.castList}>{elements}</ul>
    </section>
  );
}

export default MovieCastPage;
