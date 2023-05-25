import { Author, Li, List, Post } from './ReviewsInfo.styled';
import PropTypes from 'prop-types';

const ReviewsInfo = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ author, content, id }) => (
        <Li key={id}>
          <Author>Author: {author}</Author>
          <Post>{content}</Post>
        </Li>
      ))}
    </List>
  );
};
export default ReviewsInfo;
ReviewsInfo.propTypes = {
  reviews: PropTypes.array,
};
