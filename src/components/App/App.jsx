import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Sharelayout from 'components/ShareLayout/ShareLayout';
import Cast from 'components/Cast/Cast';
import Home from 'pages/Home';
import Reviews from 'components/Reviews/Review';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharelayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
