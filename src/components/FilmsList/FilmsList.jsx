import { Link, useLocation } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { Movie, Container, Gallery, Img, Title } from './FilmList.styled';
import PropTypes from 'prop-types';
const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <Container>
      <Gallery>
        {films.length > 0 &&
          films.map(({ id, title, poster_path }) => (
            <Movie key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : 'https://via.placeholder.com/500x750'
                  }
                  alt={title}
                  width="100%"
                />
                <Title>{title}</Title>
              </Link>
            </Movie>
          ))}
      </Gallery>
    </Container>
  );
};
export default FilmsList;
FilmsList.propTypes = {
  films: PropTypes.array,
};
