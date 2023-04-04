import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactionSummary } from 'redux/operations';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styled from 'styled-components';

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
for (let i = 2017; i <= curYear; i += 1) {
  listOfYears.push(i);
}

export const DropDown = () => {
  const date = new Date();
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const monthDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  useEffect(() => {
    dispatch(
      fetchTransactionSummary({ year: selectedYear, month: selectedMonth + 1 })
    );
    // eslint-disable-next-line
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target) &&
        isMonthDropdownOpen
      ) {
        setIsMonthDropdownOpen(false);
      }

      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target) &&
        isYearDropdownOpen
      ) {
        setIsYearDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  });

  const toggleMonthDropdown = () => {
    setIsMonthDropdownOpen(!isMonthDropdownOpen);
  };

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
  };

  return (
    <DropDownWrap>
      <DropDownButton ref={monthDropdownRef} onClick={toggleMonthDropdown}>
        {listOfMonth[selectedMonth]}
        {isMonthDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
        {isMonthDropdownOpen ? (
          <DropDownList>
            {listOfMonth.map((month, index) => (
              <DropDownItem
                key={index}
                onClick={() => {
                  setSelectedMonth(index);
                  setIsMonthDropdownOpen(false);
                }}
              >
                {month}
              </DropDownItem>
            ))}
          </DropDownList>
        ) : null}
      </DropDownButton>

      <DropDownButton ref={yearDropdownRef} onClick={toggleYearDropdown}>
        {selectedYear}
        {isYearDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
        {isYearDropdownOpen ? (
          <DropDownList>
            {listOfYears.map((year, index) => (
              <DropDownItem
                key={index}
                onClick={() => {
                  setSelectedYear(year);
                  setIsYearDropdownOpen(false);
                }}
              >
                {year}
              </DropDownItem>
            ))}
          </DropDownList>
        ) : null}
      </DropDownButton>
    </DropDownWrap>
  );
};

const DropDownWrap = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-top: 32px;
  }
`;
const DropDownButton = styled.button`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background-color: transparent;
  width: 182px;
  height: 50px;
  border: 1px solid #000000;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const DropDownList = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  width: 100%;
  top: 50px;
  left: -1px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);

  border-radius: 20px;
  gap: 6px;
  max-width: 300px;

  max-height: 165px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DropDownItem = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
  height: 28px;
  &:hover {
    background: #ffffff;
    border-radius: 30px;
  }
`;
