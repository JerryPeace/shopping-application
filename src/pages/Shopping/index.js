import styled from '@emotion/styled';
import Header from 'components/Header';
import ImageBox from './components/ImageBox';
import ProductInfo from './components/ProductInfo';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import ReviewsModal from './components/ReviewsModal';

const Shopping = () => {
  return (
    <>
      <Header />
      <Flex>
        <ImageBox />
        <ProductInfo />
        <Rating />
        <Reviews collapse="xs" />
        <ReviewsModal />
      </Flex>
    </>
  );
};

export default Shopping;

const Flex = styled.div`
  top: 40px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px 30px 30px;
`;
