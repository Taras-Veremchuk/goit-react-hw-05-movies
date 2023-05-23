import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CardWrapper, Container, List, Link } from './FilmList.styled';

const FilmsList = ({ films }) => {
  console.log(films);
  const location = useLocation();
  return (
    <Container>
      <List>
        {films.map(({ id, title, poster_path, release_date }) => (
          <CardWrapper key={id}>
            {/* <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={66} />
          </div> */}
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : 'https://via.placeholder.com/500x750'
                  }
                  alt={title}
                  width="100%"
                />
              </div>
              {title}
            </Link>
          </CardWrapper>
        ))}
      </List>
    </Container>
  );
};
export default FilmsList;
