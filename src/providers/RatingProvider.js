import { useMemo, createContext, useContext } from 'react';
import getAverageRating from 'utils/getAverageRating';
import reviews from './reviews.json';

const RatingContext = createContext();

export function useRating() {
  return useContext(RatingContext);
}

const RatingProvider = ({ children }) => {
  const data = getAverageRating(reviews);
  const value = useMemo(
    () => ({
      reviewsData: reviews,
      ...data,
    }),
    [data]
  );

  return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
};

export default RatingProvider;
