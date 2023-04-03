import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from '../../redux/Finance/financeSelectors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const dataNull = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [0.001],
      backgroundColor: ['#ff6596'],
      hoverOffset: 0,
      borderColor: [],
      borderWidth: 0,
    },
  ],
};

const Chart = ({ data, expenseSummaryChart, show }) => {
  const totalBalance = useSelector(selectTotalBalance);
  return (
    <WrapperChart>
      {show ? (
        <DoughnutContainer>
          <>
            <Doughnut
              data={data}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 90,
                plugins: {
                  legend: { display: false },
                },
              }}
            />
            <Balance>
              <Symbol>&#8372;</Symbol>
              {totalBalance}
            </Balance>
          </>
        </DoughnutContainer>
      ) : (
        <DoughnutContainer>
          <>
            <Doughnut
              data={dataNull}
              options={{
                cutoutPercentage: 90,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    enabled: false,
                  },
                },
              }}
            />
            <Balance>
              <Symbol>&#8372;</Symbol>
              {totalBalance}
            </Balance>
          </>
        </DoughnutContainer>
      )}
    </WrapperChart>
  );
};

const WrapperChart = styled.div`
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;

const DoughnutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;
const Symbol = styled.span`
  font-weight: 400;
  font-style: normal;
`;
const Balance = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: black;
`;

export default Chart;
