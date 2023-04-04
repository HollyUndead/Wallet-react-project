import { useMediaQuery } from 'react-responsive';
import { BsPen } from 'react-icons/bs';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  setEditModalTransactionId,
  setModalType,
  toggleModal,
} from 'redux/Finance/financeSlice';

export const TransactionEditButton = props => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const dispatch = useDispatch();
  const handleTransactionEdit = () => {
    dispatch(toggleModal());
    dispatch(setModalType('edit'));
    dispatch(setEditModalTransactionId(props.id));
  };

  return (
    <Span onClick={handleTransactionEdit}>
      <PenSvg />
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

const PenSvg = styled(BsPen)`
  verticalalign: 'middle';
  &:hover {
    fill: #ff6596;
  }
`;
