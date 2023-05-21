import { useEffect, useState } from 'react';
import FilmsList from 'components/FilmsList/FilmsList';

const Home = () => {
  const [films, setFilms] = useState(null);
  // ---FETCH-REQUEST---
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
    const URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${KEY}`;
    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(films => {
        console.log(films.results);
        setFilms(films.results);
      })
      .catch(err => console.error(err));
  }, []);

  return films && <FilmsList films={films} />;
};
export default Home;
