import { useMemo, createContext, useContext } from 'react';
import reviews from './reviews.json';

const RatingContext = createContext();

export function useRating() {
  return useContext(RatingContext);
}

const RatingProvider = ({ children }) => {
  const ratingData = Array(5).fill(0);
  let totalCount = 0;
  let totalRating = 0;
  reviews.forEach((data) => {
    if (data?.rating) {
      ratingData[data.rating - 1]++;
      totalCount++;
    }
  });
  // Rating Formula
  // Average Rating = 1*a+2*b+3*c+4*d+5*e / total
  for (let i = 0; i < ratingData.length; i++) {
    totalRating += ratingData[i] * (i + 1);
  }
  const averageRating = Math.round(totalRating / totalCount);

  const value = useMemo(
    () => ({
      reviewsData: reviews,
      averageRating,
      ratingData,
      totalCount,
    }),
    [averageRating, ratingData, totalCount]
  );

  return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
};

export default RatingProvider;
