import Chart from 'components/Chart/Chart';
import { DropDown } from 'components/StatDropdown/DropDown';
import Table from 'components/Table/Table';
import { useSelector } from 'react-redux';
import { selectTransactionSummary } from 'redux/Finance/financeSelectors';
import styled from 'styled-components';

const SummaryPage = () => {
  const transactionSummary = useSelector(selectTransactionSummary);
  const getData = () => {
    let data, diference;
    if (transactionSummary.categoriesSummary !== undefined) {
      diference =
        transactionSummary.expenseSummary + transactionSummary.incomeSummary;
      data = transactionSummary.categoriesSummary.map(el => {
        if (el.type !== 'INCOME') {
          return Number(String(el.total).replace('-', ''));
        }
      });
    }
    if (transactionSummary.categoriesSummary.length === 0) {
      data = [1];
      diference = 0;
    }
    return { data, diference };
  };
  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];
  return (
    <SummaryWraper>
      <div>
        <SummaryTitle>Statistics</SummaryTitle>
        <Chart
          diference={getData().diference}
          data={getData().data}
          colors={colors}
        />
      </div>
      <TableWrap>
        <DropDownOnPage />
        <Table colors={colors} />
      </TableWrap>
    </SummaryWraper>
  );
};

const SummaryWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 43px;
  display: flex;
  flex-diraction: column;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 32px;
  }
`;

const SummaryTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`;

const DropDownOnPage = styled(DropDown)``;

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SummaryPage;
