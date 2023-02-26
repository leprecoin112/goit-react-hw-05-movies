import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'shared/services/TheMovieAPI';
import Cast from './Cast/Cast';
import styles from './MovieCast.module.scss';

function MovieCast() {
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
    <Cast
      key={index}
      fullName={name}
      character={character}
      img={profile_path}
    />
  ));

  return <ul className={styles.castList}>{elements}</ul>;
}

export default MovieCast;
