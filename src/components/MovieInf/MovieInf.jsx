import React from 'react';
import { Container, Img, Title, H3, Text } from './MovieInf.styled';
import PropTypes from 'prop-types';

const MovieInf = ({ film }) => {
  const { title, poster_path, vote_average, overview, genres } = film;
  return (
    <Container>
      <Img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'https://via.placeholder.com/500x750'
        }
        alt={title}
        width="100%"
      />
      <div>
        <Title>{title}</Title>
        <H3>User score: {Math.round(vote_average * 10)}%</H3>
        <H3>Overviev</H3>
        <Text>{overview}</Text>
        <H3>Genres </H3>
        {genres && <Text>{genres.map(genre => genre.name).join(', ')}</Text>}
      </div>
    </Container>
  );
};
MovieInf.propTypes = {
  film: PropTypes.object,
};

export default MovieInf;
