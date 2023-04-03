import { Currency } from '../components/Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  if (!isMobile) {
    return <Navigate to="/" />;
  }

  return <CurrencyWrapper>{isMobile && <Currency />}</CurrencyWrapper>;
};

const CurrencyWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: center;
`;

export default CurrencyPage;
