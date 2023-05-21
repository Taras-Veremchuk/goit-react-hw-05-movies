import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsInfo from 'components/ReviewsInfo/ReviewsInfo';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
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
      .then(reviews => {
        // console.log(reviews.results);
        setReviews(reviews.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return reviews ? (
    <ReviewsInfo reviews={reviews} />
  ) : (
    <p>There are not reviews</p>
  );
};
export default Reviews;
