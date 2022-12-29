import styled from '@emotion/styled';
import { useRating } from 'provider/RatingProvider';
import CommentRenderer from './CommentRenderer';
import { media } from '../constants';

const Reviews = ({ collapse = '' }) => {
  const { reviewsData } = useRating();
  return (
    <ReviewsBox collapse={collapse}>
      {reviewsData.map((info, index) => (
        <CommentRenderer key={index} {...info} />
      ))}
      <div>
        <DetailButton collapse="xs">Load more</DetailButton>
      </div>
    </ReviewsBox>
  );
};

export default Reviews;

const ReviewsBox = styled.section`
  flex: 1 1 60%;
  flex-grow: 1;
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`;

const DetailButton = styled.button`
  display: block;
  width: 150px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background: #eee;
  text-align: center;
  margin: 0 auto;
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`;
