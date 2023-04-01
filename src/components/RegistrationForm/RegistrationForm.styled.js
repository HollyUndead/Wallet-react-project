import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px 20px 36px;
  background-color: white;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    padding: 40px 60px 65px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  left: 10px;
  top: 50%;
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
  @media screen and (min-width: 768px) {
    width: 410px;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const RegistrationInput = styled(Field)`
  width: 100%;
  outline: none;
  padding: 8px 0 8px 54px;
  font-family: 'Circe', sans-serif;
  font-size: 18px;

  color: #4a56e2;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-family: 'Circe', sans-serif;
    font-size: 18px;
    color: #bdbdbd;
  }
  &:hover,
  &:focus {
    border-color: #4a56e2;
  }
`;

export const ButtonContainer = styled.div`
  width: 220px;
  height: 120px;
  margin-top: 20px;
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
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: #24cca7;
  border-radius: 20px;
  color: white;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  text-align: center;
  letter-spacing: 0.1em;
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
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: white;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  text-align: center;
  letter-spacing: 0.1em;
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
