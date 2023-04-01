import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/operations';
import { deleteTransactionOffline } from 'redux/Finance/financeSlice';

export const TransactionDeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionOffline(id));
  };
  return <button onClick={handleDelete}>Delete</button>;
};
