import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'shared/services/TheMovieAPI';
import Review from './Review/Review';
import styles from './MovieReviews.module.scss';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCastById = async id => {
      try {
        const results = await getMovieReviewsById(id);
        setReviews(results.results);
      } catch ({ response }) {
        const message = response.data.status_message;
        console.log(message);
      }
    };

    fetchMovieCastById(movieId);
  }, [movieId]);

  const elements = reviews.map(({ author, content, id }) => (
    <Review key={id} author={author} content={content} />
  ));

  return (
    <>
      <ul className={styles.Reviews}>{elements}</ul>

      {elements.length === 0 && <p>We don`t have any reviews this movie</p>}
    </>
  );
}

export default MovieReviews;
