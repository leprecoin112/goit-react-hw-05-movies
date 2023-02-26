import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = useCallback(event => {
    setQuery(event.currentTarget.value.toLowerCase());
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (query.trim() === '') {
        toast.error('Enter your request.');
        return;
      }

      onSubmit(query);
    },
    [query, onSubmit]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleSearchChange}
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      ></input>
      <button type="submit" aria-label="search">
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
