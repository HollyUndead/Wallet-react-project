import { TransactionDeleteButton } from 'components/Transaction-buttons/TransactionDeleteButton';
import { TransactionEditButton } from 'components/Transaction-buttons/TransactionEditButton';
import styled from 'styled-components';

export const TransactionListItemPc = ({ ...props }) => {
  const { transactionDate, type, categoryName, comment, amount } =
    props.trannsaction;
  return (
    <tr>
      <ListItemTd>{transactionDate}</ListItemTd>
      <TypeEl>{type}</TypeEl>
      <ListItemTd>{categoryName}</ListItemTd>
      <ListItemTd>{comment}</ListItemTd>
      <ListItemTd>{amount}</ListItemTd>
      <ListItemTd>
        <TransactionEditButton /> <TransactionDeleteButton />
      </ListItemTd>
    </tr>
  );
};

const ListItemTd = styled.td``;

const TypeEl = styled.td`
  padding-left: 18px;
`;
