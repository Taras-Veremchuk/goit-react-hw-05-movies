import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          {/* <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={66} />
          </div> */}
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default FilmsList;
