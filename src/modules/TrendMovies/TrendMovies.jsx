import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/services/TheMovieAPI';
import { useLocation } from 'react-router-dom';
import Movies from 'shared/components/Movies/Movies';

function TrendMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <>
      {movies.length !== 0 && (
        <Movies movies={movies} location={location} locationTo="movies/" />
      )}
    </>
  );
}

export default TrendMovies;
