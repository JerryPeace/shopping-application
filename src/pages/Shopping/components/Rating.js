import styled from '@emotion/styled';
import StarRating, { ProgressRating } from 'components/StarRating';
import { useRating } from 'providers/RatingProvider';

const Rating = () => {
  const { averageRating, totalCount, ratingData, setRating } = useRating();
  return (
    <RatingBox>
      <div>
        <div>
          <strong>Reviews</strong>
        </div>
        <StarRating rating={averageRating} setRating={setRating} totalCount={totalCount} />
      </div>
      <div>
        <ol>
          {ratingData.map((count, index) => (
            <li key={index}>
              <ProgressRating count={count} total={totalCount} />
            </li>
          ))}
        </ol>
      </div>
    </RatingBox>
  );
};

export default Rating;

const RatingBox = styled.section`
  flex: 0 0 320px;
  & ol {
    padding-left: 20px;
  }
`;
