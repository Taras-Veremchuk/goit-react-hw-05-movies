import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import FilmsList from 'components/FilmsList/FilmsList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState(null);
  const [value, setValue] = useState('');
  const [page] = useState(1);
  // ---- ВИКОРИСТОВУЮ ХУК ЮССЬОРЧПАРАМС ----
  // ---- setSearchParams ПЕРЕЗАПИСУЄ РЯДОК ПАРАМЕТРІВ ЗАПИТУ ----
  // ---- searchParams ЩОБ ПОЛУЧИТИ ЗНАЧЕННЯ QUERY STRING ПАРАМЕТРІВ (МЕТОД get())----
  const [searchParams, setSearchParams] = useSearchParams();
  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );

  const urlValue = searchParams.get('query') ?? '';

  // ---FETCH-REQUEST---
  //--- РОБЛЮ ЗАПИТ З QUERY STRING ПАРАМЕТРІВ ---
  //--- ЯКЩО В ПАРАМЕТРАХ НІЧОГО НЕМАЄ ТО "" ---
  useEffect(() => {
    if (urlValue === '') return;

    //   setLoading(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWExMGZiNzYyMDgzZTBiYTg4M2ZjNmU4NjBmNzUxMiIsInN1YiI6IjY0NjU1MDE0MDA2YjAxMDE2ODRhMjBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BDHjxE3xlwjt1Vmj0BYBvFDhjMr4ND7lLemmi809zrU',
      },
    };
    const KEY = '69a10fb762083e0ba883fc6e860f7512';
    const searchParams = new URLSearchParams({
      page,
      query: value !== '' ? value : urlValue,
      perPage: 12,
    });
    const URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${KEY}&${searchParams}`;

    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(films => {
        setFilms(films.results);
        //       setLoading(false);
      })
      .catch(err => console.error(err));
  }, [value, page, urlValue]);

  const handleSubmit = value => {
    //---- ЗМІНЮЮ  QUERY STRING- КЛАДУ ОБЄКТ ПАРАМЕТРІВ ПРИ ПОДІІ SUBMIT----
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
    setValue(value);
    setFilms(null);
  };

  // == Return ==
  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {films && <FilmsList films={films} />}
    </>
  );
};
export default Movies;
