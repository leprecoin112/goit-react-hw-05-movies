import styles from './Review.module.scss';
import PropTypes from 'prop-types';

function Review({ author, content }) {
  return (
    <li>
      <h3 className={styles.author}>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
}

Review.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Review;
