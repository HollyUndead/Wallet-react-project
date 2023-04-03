import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/operations';
import { deleteTransactionOffline } from 'redux/Finance/financeSlice';
import styled from 'styled-components';

export const TransactionDeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionOffline(id));
  };
  return <Button onClick={handleDelete}>Delete</Button>;
};

const Button = styled.button`
  border: 1px solid #24cca7;
  background-color: #24cca7;
  border-radius: 18px;
  color: #ffffff;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  width: 67px;
  height: 26px;
  &:hover {
    background-color: #ff6596;
    border: 1px solid #ff6596;
  }
`;
