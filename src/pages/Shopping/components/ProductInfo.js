import styled from '@emotion/styled';
import StarRating from 'components/StarRating';
import Selector from 'pages/Shopping/components/Selector';
import { useRating } from 'providers/RatingProvider';
import { useShopCart } from 'providers/ShopCartProvider';
import { media } from '../constants';

const ProductInfo = () => {
  const { setCart, productCounts, setCounts } = useShopCart();
  const { averageRating, totalCount } = useRating();
  return (
    <ProductInfoBox>
      <h2>Nintendo Switch™ with Neon Blue and Neon Red Joy-Con™</h2>
      <StarRating rating={averageRating} totalCount={totalCount} />
      <h3>$ 300</h3>
      <Selector setCounts={setCounts} productCounts={productCounts} />
      <CartButton collapse="xs" onClick={() => setCart(true)} data-testid="add-cart-button">
        Add Cart
      </CartButton>
    </ProductInfoBox>
  );
};

export default ProductInfo;

const ProductInfoBox = styled.section`
  flex: 1 1 60%;
  & h2,
  h3 {
    margin: 5px;
  }
`;

const CartButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background: #c6e2fd;
  margin: 20px 0 30px 0;
  &:hover {
    background: #67a6e3;
    color: white;
  }
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    width: 100%;
  `)}
`;
