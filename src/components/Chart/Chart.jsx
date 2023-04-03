import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotalBalance,
  selectTransactionSummary,
} from '../../redux/Finance/financeSelectors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, diference, show, colors }) => {
  const dataNull = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: colors,
        hoverOffset: 0,
        borderColor: colors,
        borderWidth: 0,
      },
    ],
  };
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
              {
                <Span diference={diference}>
                  {String(diference).replace('-', '')}
                </Span>
              }
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
              <Span diference={diference}>
                {String(diference).replace('-', '')}
              </Span>
            </Balance>
          </>
        </DoughnutContainer>
      )}
    </WrapperChart>
  );
};

const WrapperChart = styled.div`
  margin-right: 20px;
`;

const DoughnutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Span = styled.span`
  color: ${props => {
    return props.diference > 0 ? '#24CCA7' : '#FF6596';
  }};
`;

export default Chart;
