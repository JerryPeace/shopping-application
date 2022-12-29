import { useRef } from 'react';
import styled from '@emotion/styled';
import switchPlay from 'assets/switch.png';
import cartIcon from 'assets/cart.svg';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import { useShopCart } from 'providers/ShopCartProvider';

const CartBadge = () => {
  const dropdownRef = useRef(null);
  const { addCart, setCart, productCounts } = useShopCart();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => addCart && setIsActive(!isActive);

  return (
    <Container>
      <CartIcon onClick={onClick} className="menu-trigger">
        <img src={cartIcon} alt="cart" />
        {addCart && (
          <span className="badge badge-warning" id="lblCartCount" data-testid="cart-badge">
            1
          </span>
        )}
      </CartIcon>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <div className="cart-info">
          <img src={switchPlay} alt="switch" width="50" height="50" />
          <span data-testid="cart-count">{`Qty:${productCounts}`}</span>
        </div>
        <RemoveButton
          data-testid="remove-cart"
          onClick={() => {
            setCart(false);
            setIsActive(false);
          }}
        >
          Remove from cart
        </RemoveButton>
      </nav>
    </Container>
  );
};

export default CartBadge;

const RemoveButton = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background: #c6e2fd;
  text-align: center;
  margin: 10px 0;
  &:hover {
    background: #67a6e3;
    color: white;
  }
`;

const CartIcon = styled.button`
  margin: 5px;
  background: transparent;
  border: 0;
  & img {
    color: white;
  }
  & #lblCartCount {
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
  }
  & .badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
  }
`;

const Container = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 15px;
  & .menu {
    padding: 5px 15px;
    background: #ffffff;
    border-radius: 2px;
    position: absolute;
    top: 40px;
    right: 0;
    width: 180px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    & .cart-info {
      display: flex;
      align-items: center;
      & img {
        margin-right: 10px;
      }
    }
  }
  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
