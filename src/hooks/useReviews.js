import switchPlay from 'assets/switch.png';

const useReviews = () => {
  const userComments = [
    {
      name: 'Chole',
      comment: 'goooood qulity',
      dateTime: '2022-05-23T00:00:00.000Z',
      rating: 3,
      images: [switchPlay, switchPlay, switchPlay],
    },
    {
      name: 'Peter',
      comment: 'attrative, innovaitve design',
      dateTime: '2022-04-14T00:00:00.000Z',
      rating: 4,
    },
    {
      name: 'Curu',
      comment: 'goooood product',
      dateTime: '2022-03-04T00:00:00.000Z',
      rating: 5,
      images: [switchPlay, switchPlay],
    },
  ];

  return [userComments];
};

export default useReviews;
