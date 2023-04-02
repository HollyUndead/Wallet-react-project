import styled from 'styled-components';

const SummaryPage = () => {
  return (
    <SummaryWraper>
      <SummaryTitle>Statistics</SummaryTitle>
    </SummaryWraper>
  );
};

const SummaryWraper = styled.div`
  width: '100%';
  padding-top: 43px;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 32px;
  }
`;

const SummaryTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`;

export default SummaryPage;
