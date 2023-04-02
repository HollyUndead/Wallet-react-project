import { LoginForm } from 'components/LoginForm/LoginForm';
import { useMediaQuery } from 'react-responsive';
import bgImageDesk from '../images/bg-reg-desk.png';
import bgImageTab from '../images/bg-reg-tab.png';

import logDesk1x from '../images/login-desk-1x.png';
import logDesk2x from '../images/login-desk-2x.png';
import logTab1x from '../images/login-tablet-1x.png';
import logTab2x from '../images/login-tablet-2x.png';
import styled from 'styled-components';

const LoginPage = () => {
  const isTabDesk = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Container>
      {isTabDesk && (
        <Picture>
          <picture>
            <source
              srcSet={`${logDesk1x} 1x, ${logDesk2x} 2x`}
              width="435"
              media="(min-width:1280px)"
            />
            <source
              srcSet={`${logTab1x} 1x, ${logTab2x} 2x`}
              width="260"
              media="(min-width: 768px)"
            />
            <img src={logDesk1x} width="435" alt="start page" />
          </picture>
          <Title>Finance App</Title>
        </Picture>
      )}

      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  /* padding-bottom: 1px; */
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 10px; */
    gap: 50px;
    padding: 60px 117px 48px;
    background: url(${bgImageTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #e7eaf2;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    /* height: 100%; */
    align-items: center;
    justify-content: center;
    gap: 154px;
    /* padding: 18px; */
    margin-bottom: 0;
    background: url(${bgImageDesk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ede7f2;
  }
`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 50px;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
    gap: 32px;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  @media screen and (min-width: 768px) {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.5;
    color: #000000;
  }
`;

export default LoginPage;
