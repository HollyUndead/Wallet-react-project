/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFinanceIsLoading,
  selectTransactionSummary,
} from 'redux/Finance/financeSelectors';
import styled from 'styled-components';

const Table = ({ colors }) => {
  const isLoading = useSelector(selectFinanceIsLoading);
  const CategorySummary = useSelector(selectTransactionSummary);
  return !isLoading ? (
    <>
      <div>
        <div>
          <TableContainer>
            <TableSpan>Category</TableSpan>
            <TableSpan>Amount</TableSpan>
          </TableContainer>
          <div>
            <UlList>
              {CategorySummary.categoriesSummary !== undefined ? (
                CategorySummary.categoriesSummary.map((el, index) => {
                  if (el.type !== 'INCOME') {
                    const color = colors[index];
                    return (
                      <LiItem key={index}>
                        <ColorWrpaDiv>
                          <ColorDiv
                            color={color}
                            lastItem={
                              index ===
                              CategorySummary.categoriesSummary.length - 1
                                ? true
                                : false
                            }
                          ></ColorDiv>
                          <CatName>{el.name}</CatName>
                        </ColorWrpaDiv>
                        <CatTotal>
                          {Number(String(el.total).replace('-', '')).toFixed(2)}
                        </CatTotal>
                      </LiItem>
                    );
                  }
                })
              ) : (
                <></>
              )}
            </UlList>
          </div>
        </div>
        <UlList>
          <LiTotal>
            <SpanTotal>Expenses:</SpanTotal>
            <SpanTotalExpense sum={CategorySummary.expenseSummary}>
              {Number(
                String(CategorySummary.expenseSummary).replace('-', '')
              ).toFixed(2)}
            </SpanTotalExpense>
          </LiTotal>
          <LiTotal>
            <SpanTotal>Incomes:</SpanTotal>
            <SpanTotalIncome
              sum={Number(CategorySummary.incomeSummary).toFixed(2)}
            >
              {Number(CategorySummary.incomeSummary).toFixed(2)}
            </SpanTotalIncome>
          </LiTotal>
        </UlList>
      </div>
    </>
  ) : (
    <></>
  );
};

const LiTotal = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const SpanTotalExpense = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ff6596;
`;

const SpanTotalIncome = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #24cca7;
`;

const SpanTotal = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const CatTotal = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const CatName = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ColorWrpaDiv = styled.div`
  display: flex;
  gap: 16px;
`;

const ColorDiv = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${props => {
    return props.color;
  }};
  width: 24px;
  height: 24px;
  border-radius: 6px;
`;
const TableContainer = styled.div`
  margin-top: 20px;
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  background: #ffffff;
  border-radius: 30px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
`;
const TableSpan = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;
`;

const LiItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  border-bottom: 1px solid #dcdcdf;
`;

const UlList = styled.ul`
  padding-left: 35px;
  padding-right: 35px;
`;

export default Table;
