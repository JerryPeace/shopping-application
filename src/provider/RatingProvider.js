import { useMemo, useState, createContext, useContext } from 'react';

const state = {
  rating: [5, 14, 16, 45, 20],
  total: 100,
};
const RatingContext = createContext();

const RatingProvider = ({ children }) => {
  const [currentRating, setRating] = useState(0);

  const value = useMemo(
    () => ({
      currentRating,
      ratingData: state.rating,
      totalCount: state.total,
      setRating,
    }),
    [currentRating]
  );

  return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
};

export default RatingProvider;

export function useRating() {
  return useContext(RatingContext);
}
