import { useMediaQuery } from 'react-responsive';
import { FaPen } from 'react-icons/fa';
import styled from 'styled-components';

export const TransactionEditButton = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const handleTransactionEdit = () => {
    console.log('edit');
  };
  return (
    <Span onClick={handleTransactionEdit}>
      <FaPen style={{ verticalAlign: 'middle' }} />
      {isMobile && 'Edit'}
    </Span>
  );
};

const Span = styled.span`
  cursor: pointer;
  margin-right: 8px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
`;
