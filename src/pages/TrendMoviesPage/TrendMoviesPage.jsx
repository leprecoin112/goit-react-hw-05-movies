import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'shared/services/TheMovieAPI';
import Movies from 'shared/components/Movies/Movies';

function TrendMoviesPage() {
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
    <main>
      <section>
        {movies.length !== 0 && (
          <Movies movies={movies} location={location} locationTo="movies/" />
        )}
      </section>
    </main>
  );
}

export default TrendMoviesPage;
