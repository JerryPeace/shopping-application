import { useState } from 'react';
import styled from '@emotion/styled';
import { useRating } from 'providers/RatingProvider';
import CommentRenderer from './CommentRenderer';
import { media } from '../constants';

const Reviews = ({ collapse = '' }) => {
  const { reviewsData } = useRating();
  const [displayCounts, setCounts] = useState(3);
  const [review, setReview] = useState(reviewsData.slice(0, displayCounts));
  return (
    <ReviewsBox collapse={collapse}>
      {review.map((info, index) => (
        <CommentRenderer key={index} {...info} />
      ))}
      {review.length < reviewsData.length && (
        <div>
          <DetailButton
            onClick={() => {
              setReview(reviewsData.slice(0, displayCounts + 11));
              setCounts(displayCounts + 10);
            }}
            collapse="xs"
          >
            Load more
          </DetailButton>
        </div>
      )}
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
  &:hover {
    background: #aaa;
    color: white;
  }
`;
