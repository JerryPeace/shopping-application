import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { SimpleRating } from 'components/StarRating';
import switchPlay from 'assets/switch.png';

const DATE_TIME_FORMAT = 'MMM D, YYYY';

const CommentRenderer = ({ name, rating, dateTime, comment, images }) => {
  return (
    <CommentContainer>
      <div className="comment-info">
        <span className="user-name">{name}</span>
        {rating && <SimpleRating rating={rating} />}
        <span className="comment-time">{dayjs(dateTime).format(DATE_TIME_FORMAT)}</span>
      </div>
      <div className="comments">{comment}</div>
      {images && (
        <div>
          {images.map((img, idx) => (
            <img key={idx} src={img && switchPlay} alt="switch" width="50" height="50" />
          ))}
        </div>
      )}
    </CommentContainer>
  );
};

export default CommentRenderer;

const CommentContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  & .user-name {
    margin-right: 10px;
  }
  & .comment-time {
    float: right;
  }
  & .comments {
    margin: 10px 0;
  }
`;
