import { Currency } from '../components/Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

export const CurrencyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return <CurrencyWrapper>{isMobile && <Currency />}</CurrencyWrapper>;
};

const CurrencyWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: center;
`;
