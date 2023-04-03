import { TransactionDeleteButton } from 'components/Transaction-buttons/TransactionDeleteButton';
import { TransactionEditButton } from 'components/Transaction-buttons/TransactionEditButton';
import styled from 'styled-components';
import { transformDate } from './TransactionListItemPc';

export const TransactionListItemMobile = ({ transaction, categories }) => {
  const { transactionDate, type, categoryId, comment, amount, id } =
    transaction;

  const typeStr = type === 'INCOME' ? '+' : '-';
  const categoryName =
    categories.length &&
    categories.find(category => category.id === categoryId).name;

  return (
    <Ul className="aasas">
      <LiFirst typeStr={typeStr}>
        <TitleSpan>Date</TitleSpan>
        <span>{transformDate(transactionDate)}</span>
      </LiFirst>
      <Li typeStr={typeStr}>
        <TitleSpan>Type</TitleSpan>
        <span>{typeStr}</span>
      </Li>
      <Li typeStr={typeStr}>
        <TitleSpan>Category</TitleSpan>
        <span>{categoryName}</span>
      </Li>
      <Li typeStr={typeStr}>
        <TitleSpan> Comment</TitleSpan>
        <span>{comment}</span>
      </Li>
      <Li typeStr={typeStr}>
        <TitleSpan>Sum</TitleSpan>
        <span>{amount}</span>
      </Li>
      <LiLast typeStr={typeStr}>
        <TransactionEditButton id={id} />
        <TransactionDeleteButton id={id} />
      </LiLast>
    </Ul>
  );
};

const Ul = styled.ul`
  wdith: 100%;
  margin-bottom: 20px;
`;

const LiFirst = styled.li`
  height: 48px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid
    ${props => {
      return props.typeStr === '+' ? '#24CCA7' : '#FF6596';
    }};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid #dcdcdf;
`;

const Li = styled.li`
  height: 48px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid
    ${props => {
      return props.typeStr === '+' ? '#24CCA7' : '#FF6596';
    }};
  border-bottom: 1px solid #dcdcdf;
`;

const LiLast = styled.li`
  height: 48px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid
    ${props => {
      return props.typeStr === '+' ? '#24CCA7' : '#FF6596';
    }};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const TitleSpan = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;
