import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home';
import Movies from '../../../Pages/Movies';
import MovieDetails from '../../../Pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Layout from 'Pages/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
