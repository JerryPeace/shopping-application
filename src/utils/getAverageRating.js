export default function getAverageRating(reviews) {
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
  return {
    averageRating: Math.round(totalRating / totalCount),
    ratingData,
    totalCount,
  };
}
