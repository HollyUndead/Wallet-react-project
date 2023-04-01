import { useMediaQuery } from 'react-responsive';
import { FaPen } from 'react-icons/fa';

export const TransactionEditButton = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 320px)',
  });
  const handleTransactionEdit = () => {
    console.log('edit');
  };
  return (
    <span onClick={handleTransactionEdit} style={{ cursor: 'pointer' }}>
      <FaPen />
      {isMobile && 'Edit'}
    </span>
  );
};
