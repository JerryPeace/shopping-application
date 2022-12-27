/* eslint-disable react/no-unknown-property */
import styled from '@emotion/styled';
import ProgressBar from './ProgressBar';

const StarRating = ({ rating, setRating, totalCount }) => {
  return (
    <Button
      onClick={(e) => {
        setRating(e.target?.getAttribute('star-id') || rating);
      }}
    >
      <SimpleRating rating={rating} />
      <span>{` (${totalCount})`}</span>
    </Button>
  );
};

export default StarRating;

const Button = styled.button`
  display: inline-block;
  border: 0;
  background: transparent;
  padding: 0;
`;

export const Star = ({ marked, starId }) => {
  return (
    <span star-id={starId} style={{ color: '#ff9933' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

export const ProgressRating = ({ count = 0, total = 100 }) => {
  return (
    <>
      <Star marked={true} />
      <ProgressBar percent={Math.round((count / total) * 100)} />
      <span>{`(${count})`}</span>
    </>
  );
};

export const SimpleRating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1} `} marked={rating >= i + 1} />
      ))}
    </>
  );
};
