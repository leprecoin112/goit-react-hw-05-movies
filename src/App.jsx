import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './shared/styles/App.module.scss';
import Header from 'pages/common/Header';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('pages/common/NotFoundPage/NotFoundPage')
);
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieCastPage = lazy(() => import('pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() =>
  import('pages/MovieReviewsPage/MovieReviewsPage')
);
const MoviesSearchPage = lazy(() =>
  import('pages/MoviesSearchPage/MoviesSearchPage')
);
export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="goit-react-hw-05-movies/" element={<HomePage />} />
          <Route
            path="goit-react-hw-05-movies/movies"
            element={<MoviesSearchPage />}
          />
          <Route
            path="goit-react-hw-05-movies/movies/:movieId"
            element={<MoviePage />}
          >
            <Route path="cast" element={<MovieCastPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={5000} />
    </div>
  );
};
