import React from 'react';
import styled from 'styled-components';

const Table = () => {
  return (
    <div>
      <div>
        <TableContainer>
          <TableSpan>Category</TableSpan>
          <TableSpan>Amount</TableSpan>
        </TableContainer>
        <div>
          <ul>
            <li>
              <div>Chlen</div>
              <div>ChlenTwo</div>
              <div>ChlenThree</div>
            </li>
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <span>Expenses:</span>
          <span>22213</span>
        </li>
        <li>
          <span>Incomes:</span>
          <span>3132</span>
        </li>
      </ul>
    </div>
  );
};

const TableContainer = styled.div`
  display: flex;
  width: 395px;
  height: 58px;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  border-radius: 30px;
  gap: 135px;
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
export default Table;
