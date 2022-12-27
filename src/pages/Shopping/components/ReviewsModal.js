import { useState } from 'react';
import styled from '@emotion/styled';
import Modal from 'components/Modal';
import { media } from '../constants';
import Reviews from './Reviews';

const ReviewsModal = () => {
  const [active, setActive] = useState(false);
  return (
    <Container collapse="xs">
      <Button onClick={() => setActive(true)}>See more reviews</Button>
      <Modal active={active} hideModal={() => setActive(false)} title="Reviews">
        <Reviews />
      </Modal>
    </Container>
  );
};

export default ReviewsModal;

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  display: none;
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    display: block;
  `)}
`;

const Button = styled.button`
  display: block;
  color: black;
  border: 0;
  background: transparent;
  margin: 0 auto;
`;
