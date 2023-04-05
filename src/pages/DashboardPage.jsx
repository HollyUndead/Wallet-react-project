/* eslint-disable */
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
import { setModalType, toggleModal } from 'redux/Finance/financeSlice';

const DashboardPage = () => {
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
  const openModalAdd = () => {
    dispatch(toggleModal());
    dispatch(setModalType('add'));
  };

  let sortedTransacrion = [...transactions];
  sortedTransacrion.sort((obj1, obj2) => {
    const day1 = obj1.transactionDate.slice(8, 10);
    const month1 = obj1.transactionDate.slice(5, 7);
    const year1 = obj1.transactionDate.slice(2, 4);

    const day2 = obj2.transactionDate.slice(8, 10);
    const month2 = obj2.transactionDate.slice(5, 7);
    const year2 = obj2.transactionDate.slice(2, 4);
    if (year1 !== year2) {
      return year1 >= year2 ? -1 : 1;
    }
    if (month1 !== month2) {
      return month1 >= month2 ? -1 : 1;
    }
    if (day1 !== day2) {
      return day1 >= day2 ? -1 : 1;
    }
  });

  return (
    <DashboardContainer>
      {isMobile && <Balance />}
      {!isMobile && (
        <Tabel>
          <Thead>
            <Tr>
              <ThDate>Date</ThDate>
              <ThType>Type</ThType>
              <ThItem>Category</ThItem>
              <ThItem>Comments</ThItem>
              <ThSum>Sum</ThSum>
              <ThButtons>Buttons</ThButtons>
            </Tr>
          </Thead>
          <Tbody>
            {sortedTransacrion.map((transaction, index) => {
              return (
                <TransactionListItemPc
                  transaction={transaction}
                  key={transaction.id}
                  categories={categories}
                  last={index === transactions.length - 1}
                />
              );
            })}
          </Tbody>
        </Tabel>
      )}
      {isMobile && (
        <Ul>
          {transactions.map(transaction => {
            return (
              <TransactionListItemMobile
                transaction={transaction}
                key={transaction.id}
                categories={categories}
              />
            );
          })}
        </Ul>
      )}
      <AddIconWrap>
        <ButtonIcon onClick={openModalAdd} />
      </AddIconWrap>
    </DashboardContainer>
  );
};

const Tr = styled.tr`
  width: calc(100% - 1em);
`;

const ButtonIcon = styled(AiFillPlusCircle)`
  width: 44px;
  height: 44px;
  fill: #24cca7;
  &:hover {
    fill: #4a56e2;
  }
  &:active {
    fill: #4a56e2;
  }
`;

const DashboardContainer = styled.div`
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

const Tabel = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-rigth: 32px;
  }
`;

const Thead = styled.thead`
  display: table;
  width: calc(100% - 1px);
  table-layout: fixed;
  border: 0px;
  height: 58px;
  background-color: #ffffff;
  border-radius: 30px;
`;

const Tbody = styled.tbody`
  display: block;
  width: 100%;
  min-height: 200px;
  table-layout: table;
  overflow: auto;
  height: calc(100vh - 200px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 370px);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;

const ThDate = styled.th`
  border: 0px solid;
  padding-left: 25px;
  text-align: left;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

const ThType = styled.th`
  text-align: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

const ThItem = styled.th`
  text-align: left;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

const ThSum = styled.th`
  text-align: right;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

const ThButtons = styled.th`
  border: 0px solid;
  padding-right: 20px;
  text-align: right;
  color: transparent;
`;

const AddIconWrap = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  padding: 0;
  border: 0;
  @media screen and (max-width: 767px) {
    position: sticky;
    left: calc(100vh - 40px);
  }
  &:active {
    outline: 3px solid black;
  }
`;

const Ul = styled.ul`
  width: 280px;
  margin-top: 32px;
`;

export default DashboardPage;
