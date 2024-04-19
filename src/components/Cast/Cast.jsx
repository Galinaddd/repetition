import { getMovieCredits } from 'movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(() => null);
  console.log(`Movie Id: ${movieId}`);

  useEffect(() => {
    (async function () {
      try {
        const result = await getMovieCredits(movieId);
        setCast(result.cast);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast ? (
          cast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="50"
              />
              <h4>{item.name}</h4>
              <p>Character: {item.character}</p>
            </li>
          ))
        ) : (
          <p>No informaition</p>
        )}
      </ul>
    </>
  );
};
export default Cast;
