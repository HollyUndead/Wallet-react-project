import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCurrency } from '../../redux/operations';
import styled from 'styled-components';
// const currencyIMG = require('../../img/currency-images/currencyIMG.png');
import Wave from 'react-wavify';

const USD_CURRENCU_CODE = 840;
const EUR_CURRENCU_CODE = 978;
const UAH_CURRENCU_CODE = 980;

export const Currency = () => {
  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem('currency')) ?? []
  );
  const [lastCurrencyFetchDate, setlastCurrencyFetchDate] = useState(
    localStorage.getItem('lastCurrencyFetchDate') ?? null
  );

  useEffect(() => {
    const getFeaturedCurrency = async () => {
      const data = await fetchCurrency();
      const featuredCurrency = data.filter(
        ({ currencyCodeA, currencyCodeB }) => {
          return (
            (currencyCodeA === USD_CURRENCU_CODE ||
              currencyCodeA === EUR_CURRENCU_CODE) &&
            currencyCodeB === UAH_CURRENCU_CODE
          );
        }
      );
      setCurrency(featuredCurrency);
      localStorage.setItem('currency', JSON.stringify(featuredCurrency));
    };

    const currentDateTime = new Date().getTime();
    const timeDiffInSec = (currentDateTime - lastCurrencyFetchDate) / 1000;
    if (timeDiffInSec > 3600) {
      getFeaturedCurrency();
      setlastCurrencyFetchDate(currentDateTime);
      localStorage.setItem('lastCurrencyFetchDate', currentDateTime);
    }
    // eslint-disable-next-line
  }, []);
  const getFormattedDate = () => {
    let date = new Date(Number(lastCurrencyFetchDate));
    let str = `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')} \xa0 ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    return str;
  };

  return (
    <TableWrapper>
      {/* <ImgCurrency src={currencyIMG} alt="img" /> */}
      <TableCurrency>
        <TableHeader>
          <tr>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Purchase</TableHeaderCell>
            <TableHeaderCell>Sale</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {currency.map(({ currencyCodeA, rateBuy, rateSell }) => (
            <tr key={nanoid()}>
              <td>{currencyCodeA === USD_CURRENCU_CODE ? 'USD' : 'EUR'}</td>
              <td>{rateBuy.toFixed(2)}</td>
              <td>{rateSell.toFixed(2)}</td>
            </tr>
          ))}
        </TableBody>
      </TableCurrency>
      <Wavewrap>
        <Wave mask="url(#mask)" fill="#fff">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="-20"
                width="2000"
                height="200"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </Wavewrap>
      <LastUpdate>Last update &nbsp;: &nbsp; {getFormattedDate()}</LastUpdate>
    </TableWrapper>
  );
};

export const Wavewrap = styled.div`
  position: absolute;
  width: 100%;
  top: 55%;
`;

export const TableWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  */
  position: relative;
  background: #4a56e2;
  min-width: 280px;
  min-height: 174px;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 336px;
    min-height: 182px;
  }
  @media screen and (min-width: 1200px) {
    width: 393px;
    min-height: 290px;
  }
`;

export const TableCurrency = styled.table`
  background: #4a56e2;
  text-align: center;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  width: 280px;
  height: 130px;
  background: #4a56e2;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 130px;
  }
  @media screen and (min-width: 1200px) {
    width: 393px;
    height: 174px;
  }
`;

export const ImgCurrency = styled.img`
  position: absolute;
  width: 280px;
  height: 93px;
  left: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 95px;
  }
  @media screen and (min-width: 1200px) {
    width: 393px;
    height: 134px;
  }
`;

export const TableHeader = styled.thead`
  background: #6e78e8;
  color: #ffffff;
`;

export const TableHeaderCell = styled.th`
  padding-top: 17px;
  font-family: 'Circe';
  padding-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    padding-top: 11px;
    padding-bottom: 12px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 17px;
    padding-bottom: 16px;
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
  padding: 0;
  margin: 0%;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const LastUpdate = styled.p`
  color: #fff;
  position: absolute;
  top: 85%;
  left: 20%;
  /* padding-top: 20px;
  padding-right: 10px; */
  font-size: 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    top: 89%;
    left: 27%;
    /* padding-right: 15px; */
    /* text-align: center; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 82px; */
    left: 18%;
    /* padding-top: 123px;
    padding-right: 10px; */
    font-size: 16px;
  }
`;
