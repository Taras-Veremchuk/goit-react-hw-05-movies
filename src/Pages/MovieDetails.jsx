import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [filmInf, setFilmInf] = useState(null);
  const location = useLocation();
  const backLinLocationRef = useRef(location.state?.from ?? '/movies');

  // --- ДЕСТРУКТУРИЗАЦІЯ ---
  const { movieId } = useParams();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWExMGZiNzYyMDgzZTBiYTg4M2ZjNmU4NjBmNzUxMiIsInN1YiI6IjY0NjU1MDE0MDA2YjAxMDE2ODRhMjBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BDHjxE3xlwjt1Vmj0BYBvFDhjMr4ND7lLemmi809zrU',
      },
    };
    const KEY = '69a10fb762083e0ba883fc6e860f7512';
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${KEY}`;
    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(film => {
        setFilmInf(film);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <Link to={backLinLocationRef.current}>Back to films list</Link>
      {filmInf && (
        <>
          <p>{filmInf.title}</p>
          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
