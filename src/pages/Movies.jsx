import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovie } from 'movieAPI';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(() => null);
  const [searchParams, setSearchParams] = useSearchParams();
  const onSearch = e => {
    e.preventDefault();
    const search = e.target.elements.filter.value.trim().toLowerCase();
    console.log(search);
    if (search === '') {
      return;
    }
    setSearchParams({ query: search });
    e.target.elements.filter.value = '';
  };

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (query) {
      (async function () {
        const result = await searchMovie(query);
        setMovies(result);
      })();
    }
  }, [searchParams]);

  return (
    <>
      <h2>Movies</h2>
      <form onSubmit={onSearch}>
        <input type="text" name="filter" />
        <button type="submit">search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
