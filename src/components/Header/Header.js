import styled from '@emotion/styled';
import CartBadge from './CartBadge';

const Header = () => {
  return (
    <HeaderContainer>
      <CartBadge />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 40px;
  background: #333;
  color: white;
  text-align: right;
`;
