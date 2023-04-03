import { TransactionDeleteButton } from 'components/Transaction-buttons/TransactionDeleteButton';
import { TransactionEditButton } from 'components/Transaction-buttons/TransactionEditButton';
import styled from 'styled-components';

export const transformDate = date => {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(2, 4);
  return `${day}.${month}.${year}`;
};

export const TransactionListItemPc = ({ transaction, categories, last }) => {
  const { transactionDate, type, categoryId, comment, amount, id } =
    transaction;

  const typeStr = type === 'INCOME' ? '+' : '-';
  const categoryName =
    categories.length &&
    categories.find(category => category.id === categoryId).name;
  return (
    <Tr last={last}>
      <ItemDate>{transformDate(transactionDate)}</ItemDate>
      <ItemType>{typeStr}</ItemType>
      <ItemCategory>{categoryName}</ItemCategory>
      <ItemComment>{comment}</ItemComment>
      <ItemAmount typeStr={typeStr}>
        {Number(String(amount).replace('-', '')).toFixed(2)}
      </ItemAmount>
      <ItemButtons>
        <TransactionEditButton id={id} />
        <TransactionDeleteButton id={id} />
      </ItemButtons>
    </Tr>
  );
};

const Tr = styled.tr`
  border-bottom: ${props => {
    if (!props.last) {
      return '1px solid #dcdcdf';
    } else {
      return '0px';
    }
  }};
  height: 54px;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const ItemDate = styled.td`
  text-align: left;
  padding-left: 25px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ItemType = styled.td`
  text-align: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ItemCategory = styled.td`
  text-align: left;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ItemComment = styled.td`
  text-align: left;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ItemAmount = styled.td`
  color: ${props => {
    return props.typeStr === '+' ? '#24CCA7' : '#FF6596';
  }};
  text-align: right;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const ItemButtons = styled.td`
  text-align: right;
  padding-right: 20px;
`;
