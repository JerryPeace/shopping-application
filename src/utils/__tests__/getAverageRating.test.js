import getAverageRating from '../getAverageRating';
import reviews from '../__mocks__/reviews.json';

describe('getAverageRating function', () => {
  test('return correctly value', () => {
    const { averageRating, ratingData } = getAverageRating(reviews);
    expect(averageRating).toBe(4);
    expect(ratingData[3]).toBe(12);
  });
});
