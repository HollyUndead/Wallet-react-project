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
    query: '(max-width: 480px)',
  });

  // const placeholder1 = [
  //   {
  //     id: '1',
  //     transactionDate: '1236456',
  //     type: 'INCOME',
  //     categoryId: 'c9d9e447-1b83-4238-8712-edc77b18b739',
  //     userId: 'string',
  //     comment: 'фывцйвцйв',
  //     amount: 0,
  //     balanceAfter: 0,
  //   },
  //   {
  //     id: '2',
  //     transactionDate: 'string',
  //     type: 'INCOME',
  //     categoryId: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
  //     userId: 'string',
  //     comment: 'string',
  //     amount: 0,
  //     balanceAfter: 0,
  //   },
  //   {
  //     id: '3',
  //     transactionDate: 'string',
  //     type: 'INCOME',
  //     categoryId: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
  //     userId: 'string',
  //     comment: 'string',
  //     amount: 0,
  //     balanceAfter: 0,
  //   },
  //   {
  //     id: '4',
  //     transactionDate: 'string',
  //     type: 'expsens',
  //     categoryId: 'c143130f-7d1e-4011-90a4-54766d4e308e',
  //     userId: 'string',
  //     comment: 'string',
  //     amount: 0,
  //     balanceAfter: 0,
  //   },
  // ];
  return (
    <div style={{ width: '100%' }}>
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
            {/* {placeholder1.map(el => {
              const { transactionDate, type, categoryId, comment, amount } = el;
              const categoryName = categories.find(el => {
                return el.id === categoryId;
              });
              const obj = {
                transactionDate,
                type: type === 'INCOME' ? '+' : '-',
                comment,
                amount,
                // categoryName: categoryName.name,
              };

              return <TransactionListItemPc trannsaction={obj} key={el.id} />;
            })} */}
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
          {/* {placeholder1.map(el => {
            const { transactionDate, type, categoryId, comment, amount } = el;
            const categoryName = categories.find(el => {
              return el.id === categoryId;
            });
            const obj = {
              transactionDate,
              type: type === 'INCOME' ? '+' : '-',
              comment,
              amount,
              categoryName: categoryName.name,
            };

            return <TransactionListItemMobile trannsaction={obj} key={el.id} />;
          })} */}
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
    </div>
  );
};

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
