import styled from '@emotion/styled';

const PRODUCT_COUNTS = 10;

const Selector = ({ productCounts, setCounts }) => {
  return (
    <Container>
      <label htmlFor="count-select">Qty: </label>
      <select
        name="switch"
        id="count-select"
        value={+productCounts}
        onChange={(e) => setCounts(e.target.value)}
      >
        {[...Array(PRODUCT_COUNTS).keys()].map((value) => (
          <option key={value} value={value + 1}>
            {value + 1}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;

const Container = styled.div`
  margin: 10px 0;
  & select {
    width: 100px;
  }
`;
