import { getMovieReviews } from 'movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(() => null);
  useEffect(() => {
    (async function () {
      try {
        const result = await getMovieReviews(movieId);
        setReviews(result.results);
        // console.log(result.results);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                alt={review.author}
                width="50"
              />
              <h4>{review.author}</h4>
              <p>{review.contant}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No informaition</p>
      )}
    </>
  );
};

export default Reviews;
