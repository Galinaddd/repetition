import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDeatails } from 'movieAPI';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(() => null);
  const location = useLocation();

  // console.log(location);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async function () {
      try {
        const result = await getMovieDeatails(movieId);
        setMovieInfo(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);
  return (
    <>
      <p>MovieDetails page</p>
      <NavLink to={backLinkHref}>Get Back</NavLink>
      {movieInfo ? (
        <>
          <MovieCard info={movieInfo} />
          <ul>
            <li>
              <NavLink to="Cast" state={{ from: backLinkHref }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="Reviews " state={{ from: backLinkHref }}>
                reviews{' '}
              </NavLink>
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
