import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastInfo from 'components/Cast/CastInfo';
import { Text } from './CastInfo.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
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
    const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${KEY}`;

    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(casts => {
        setCasts(casts.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return casts.length > 0 ? (
    <CastInfo casts={casts} />
  ) : (
    <Text>There are not casts</Text>
  );
};
export default Cast;
