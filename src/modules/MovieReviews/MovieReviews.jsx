import PropTypes from 'prop-types';
import styles from './MovieReviews.module.scss';

function MovieReviews({ author, content }) {
  return (
    <li>
      <h3 className={styles.author}>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
}

MovieReviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default MovieReviews;
