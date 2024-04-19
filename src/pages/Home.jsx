import { useEffect, useState } from 'react';

import { getTranding } from 'movieAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setmovies] = useState(() => null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const resulte = await getTranding();

        setmovies(resulte);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <p>Home page</p>
      <h1>Trending today</h1>
      <ul>{movies && <MoviesList movies={movies} />}</ul>
    </>
  );
};

export default Home;
