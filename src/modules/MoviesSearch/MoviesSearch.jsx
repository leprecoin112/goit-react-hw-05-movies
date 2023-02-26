import { useState, useEffect } from 'react';
import Movies from 'shared/components/Movies/Movies';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'shared/components/SearchForm/SearchForm';
import { getMoviesByQuery } from 'shared/services/TheMovieAPI';
import { toast } from 'react-toastify';
import Loader from 'shared/components/Loader/Loader';

function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const resetToDefault = () => {
    setItems([]);
  };

  const handleFormSubmit = value => {
    if (query !== value) {
      setSearchParams({ query: value });

      resetToDefault();
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMoviesByQuery = async query => {
      setLoading(true);
      try {
        const results = await getMoviesByQuery(query);
        if (results.results.length === 0) {
          toast.error('Nothing found. Try another query.');
        }
        setItems(results.results);
      } catch ({ response }) {
        const message = response.data.status_message;
        console.log(message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesByQuery(query);
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      {loading && <Loader/>}
      {items.length !== 0 && <Movies movies={items} location={location} />}
    </div>
  );
}

export default MoviesSearch;
