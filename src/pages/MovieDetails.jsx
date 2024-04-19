import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDeatails } from 'movieAPI';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(() => null);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    (async function () {
      try {
        const result = await getMovieDeatails(movieId);
        setMovieInfo(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);
  return (
    <>
      <p>MovieDetails page</p>
      <NavLink to={location.state?.from ?? '/'}>Get Back</NavLink>
      {movieInfo ? (
        <>
          <MovieCard info={movieInfo} />
          <ul>
            <li>
              <NavLink to="Cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="Reviews ">reviews </NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      ) : (
        <p>No informaition</p>
      )}
    </>
  );
};
export default MovieDetails;
