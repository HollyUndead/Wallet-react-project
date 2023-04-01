import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { TransactionListItemMobile } from 'components/TransactionListItem/TransactionListItemMobile';
import { TransactionListItemPc } from 'components/TransactionListItem/TransactionListItemPc';
import {
  selectTransactions,
  selectTransactionCategories,
} from 'redux/Finance/financeSelectors';
import { AiFillPlusCircle } from 'react-icons/ai';
import {
  fetchTransactions,
  fetchTransactionCategories,
} from 'redux/operations';
import { Balance } from 'components/Balance/Balance';
import styled from 'styled-components';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchTransactionCategories());
    // eslint-disable-next-line
  }, []);
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <DashboardContainer>
      {isMobile && <Balance />}
      {!isMobile && (
        <TransactionListTablePc>
          <thead>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comments</Th>
            <Th>Sum</Th>
            <Th>Buttons</Th>
          </thead>
          <tbody>
            {transactions.map(transaction => {
              return (
                <TransactionListItemPc
                  transaction={transaction}
                  key={transaction.id}
                  categories={categories}
                />
              );
            })}
          </tbody>
        </TransactionListTablePc>
      )}
      {isMobile && (
        <ul>
          {transactions.map(transaction => {
            return (
              <TransactionListItemMobile
                transaction={transaction}
                key={transaction.id}
                categories={categories}
              />
            );
          })}
        </ul>
      )}
      <AddIconWrap>
        <AiFillPlusCircle
          style={{
            width: '44px',
            height: '44px',
            fill: '#24CCA7',
          }}
        />
      </AddIconWrap>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  width: '100%';
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 46px;
  }
`;

const AddIconWrap = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

const TransactionListTablePc = styled.table`
  width: 100%;
`;

const Th = styled.th`
  text-align: left;
`;
