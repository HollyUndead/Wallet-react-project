import { TransactionDeleteButton } from 'components/Transaction-buttons/TransactionDeleteButton';
import { TransactionEditButton } from 'components/Transaction-buttons/TransactionEditButton';
import styled from 'styled-components';

export const TransactionListItemPc = ({ transaction, categories }) => {
  const { transactionDate, type, categoryId, comment, amount } = transaction;

  const typeStr = type === 'INCOME' ? '+' : '-';
  const categoryName =
    categories.length &&
    categories.find(category => category.id === categoryId).name;

  return (
    <tr>
      <ListItemTd>{transactionDate}</ListItemTd>
      <TypeEl>{typeStr}</TypeEl>
      <ListItemTd>{categoryName}</ListItemTd>
      <ListItemTd>{comment}</ListItemTd>
      <ListItemTd>{amount}</ListItemTd>
      <ListItemTd>
        <TransactionEditButton id={transaction.id} />
        <TransactionDeleteButton id={transaction.id} />
      </ListItemTd>
    </tr>
  );
};

const ListItemTd = styled.td``;

const TypeEl = styled.td`
  padding-left: 18px;
`;
