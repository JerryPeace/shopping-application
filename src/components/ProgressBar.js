import styled from '@emotion/styled';

const ProgressBar = ({ percent }) => {
  return (
    <ProgressBarContainer>
      <Container>
        <Background />
        <Progress percent={percent} />
      </Container>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #ccc;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: orange;
  width: ${({ percent }) => percent}%;
`;

const ProgressBarContainer = styled.div`
  width: 180px;
  display: inline-block;
  margin-right: 10px;
  margin-left: 5px;
`;
