import { Ul, Li, Img } from './CastInfo.styled';
import PropTypes from 'prop-types';

const CastInfo = ({ casts }) => {
  return (
    <Ul>
      {casts.map(({ id, name, profile_path }) => (
        <Li key={id}>
          <Img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://via.placeholder.com/120x180'
            }
            alt={name}
            width="120px"
            height="auto"
          />
          {name}
        </Li>
      ))}
    </Ul>
  );
};
export default CastInfo;
CastInfo.propTypes = {
  casts: PropTypes.array,
};
