import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsInfo from 'components/Reviews/ReviewsInfo';
import { Text } from './ReviewsInfo.styled.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
    const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${KEY}`;

    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setReviews(data.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return reviews.length > 0 ? (
    <ReviewsInfo reviews={reviews} />
  ) : (
    <Text>There are not reviews</Text>
  );
};
export default Reviews;
