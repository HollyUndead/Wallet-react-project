import { Field, Form, ErrorMessage as FormikError } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    height: 100%;
    padding: 44px;
  }
`;
export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  padding: 34px 0px;
  background-color: white;

  @media screen and (min-width: 768px) {
    max-width: 533px;
    height: 516px;
    padding: 30px 20px;
    border-radius: 20px;
    /* padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px; */
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    /* width: 533px;
    height: 616px; */
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 12px;
  margin: 4px 0;
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  left: 10px;
  top: 19px;
  transform: translateY(-50%);
  fill: #e0e0e0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    fill: #4a56e2;
  }
`;

export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding-right: 15px;
  }
`;

export const RegistrationLabel = styled.label`
  position: relative;
  width: 280px;
  margin-bottom: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #4a56e2;
  }

  :hover > svg,
  :focus > svg {
    fill: #4a56e2;
  }
  @media screen and (min-width: 768px) {
    width: 410px;
  }

  /* @media screen and (min-width: 1280px) {
    width: 410px;
  } */
`;

export const RegistrationInput = styled(Field)`
  /* width: 90%; */
  outline: none;
  padding: 8px 1px 8px 54px;
  font-family: 'Circe', sans-serif;
  font-size: 18px;
  line-height: 1.5;

  color: #4a56e2;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-family: 'Circe', sans-serif;
    font-size: 16px;
    color: #bdbdbd;
  }
  &:hover,
  &:focus {
    border-color: #4a56e2;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 220px;
  height: 115px;
  margin-top: 26px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonRegister = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 68px 13px 68px;
  border: none;
  background-color: #24cca7;
  border-radius: 20px;
  color: white;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: #4a56e2;
    color: white;
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const ButtonLogIn = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 68px 13px 68px;
  border: none;
  background-color: white;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;

  text-align: center;

  color: #4a56e2;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: #4a56e2;
    color: white;
    transform: scale(1.02);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const IndicatorBox = styled.div`
  width: ${props => (props.show ? '269px' : '0')};
  @media screen and (min-width: 768px) {
    width: ${props => (props.show ? ' 424px' : '0')};
  }
  transform: translateY(-1px);
  border-radius: 10px;
  height: 3px;
  overflow: hidden;
  background-color: ${props => props.color};

  transition: all 400ms ease-in-out;
`;

export const Indicator = styled.div`
  height: 100%;
  border-radius: 10px;
  width: ${props => props.width}%;

  background: linear-gradient(
    90deg,
    rgba(36, 204, 167, 1) 75%,
    rgba(255, 27, 0, 1) 100%
  );
  transition: all 1000ms ease-in-out;
`;

export const EyeBox = styled.div`
  position: absolute;
  right: 10px;
  top: 23px;
  transform: translateY(-50%);
  fill: #e0e0e0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    color: #4a56e2;
  }
`;

export const ConfirmBox = styled.div`
  width: ${props => (props.show ? '269px' : '0')};
  @media screen and (min-width: 768px) {
    width: ${props => (props.show ? ' 424px' : '0')};
  }
  transform: translateY(-1px);
  border-radius: 10px;
  height: 3px;
  overflow: hidden;
  background-color: rgba(255, 27, 0, 1);

  transition: all 400ms ease-in-out;
`;

export const ConfirmIndicator = styled.div`
 height: 100%;
  border-radius: 10px;
  width: ${props => props.width}%;

  background-color: rgba(36, 204, 167, 1);
  transition: all 500ms ease-in-out; */
`;
