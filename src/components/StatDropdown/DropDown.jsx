import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactionSummary } from 'redux/operations';
import styled from 'styled-components';
import './DropDown.css';

let listOfYears = [];
const listOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let curYear = new Date().getFullYear();
for (let i = 2000; i <= curYear; i += 1) {
  listOfYears.push(i);
}

export const DropDown = () => {
  const date = new Date();
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTransactionSummary({ year: selectedYear, month: selectedMonth + 1 })
    );
  }, [selectedMonth, selectedYear]);

  return (
    <DropDownWrap>
      <DropDownSelect
        className="custom-select"
        name="month"
        defaultValue={selectedMonth}
        onChange={e => {
          setSelectedMonth(Number(e.target.value));
          fetch();
        }}
      >
        {listOfMonth.map((month, index) => {
          return (
            <Option key={index} value={index}>
              {month}
            </Option>
          );
        })}
      </DropDownSelect>

      <DropDownSelect
        className="custom-select"
        name="year"
        defaultValue={selectedYear}
        onChange={e => {
          setSelectedYear(Number(e.target.value));
        }}
      >
        {listOfYears.map((year, index) => {
          return (
            <option key={index} value={year}>
              {year}
            </option>
          );
        })}
      </DropDownSelect>
    </DropDownWrap>
  );
};

const Option = styled.option`
  border: 10px solid red;
`;

const DropDownWrap = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const DropDownSelect = styled.select`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  background-color: transparent;
`;
