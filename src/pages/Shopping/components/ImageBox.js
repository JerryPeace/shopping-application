import styled from '@emotion/styled';
import switchPlay from 'assets/switch.png';

const ImageBox = () => {
  return (
    <Container>
      <img src={switchPlay} alt="switch" />
    </Container>
  );
};

export default ImageBox;

const Container = styled.section`
  flex: 0 0 320px;
  & img {
    width: 280px;
    height: 280px;
    margin-right: 50px;
  }
`;
