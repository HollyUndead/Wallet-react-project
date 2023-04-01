import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Checkbox from './Checkbox';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Icons from 'images/icons.svg';

const initialValues = {
  type: false,
  category: '',
  amount: '',
  transactionDate: new Date(Date.now()),
  comment: '',
};
const ModalAdd = ({ handleSubmitForm }) => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionDate, setTransactionDate] = useState(new Date(Date.now()));
  console.log(Icons);
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onSubmit = values => {
    handleSubmitForm({ ...values, type: checked });
  };
  return (
    <ModalBox>
      <ModalTitle>Add transactions</ModalTitle>
      <StyledCheckbox>
        <Checkbox type="checkbox" checked={checked} onChange={handleChange} />
      </StyledCheckbox>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <StyledSelectField
            name="category"
            placeholder="Select a category"
            as="select"
          >
            <option value=""></option>
            <option value="value1">Main expenses</option>
            <option value="value2">Products</option>
            <option value="value4">Car</option>
            <option value="value5">Self care</option>
            <option value="value6">Child care</option>
            <option value="value7">Household products</option>
          </StyledSelectField>
          <ErrorMessage name="category" />
          <DataBox>
            <Field name="amount" placeholder="0.00" />
            <ErrorMessage name="amount" />

            <Datetime
              open={isOpen}
              timeFormat={false}
              name={transactionDate}
              value={transactionDate}
              id="date"
              type="date"
              input={true}
              selected={transactionDate}
              maxDate={new Date()}
              // dateFormat = "dd-MM-yyyy"
              onChange={newValue => {
                setTransactionDate(moment(newValue).toISOString());
              }}
              renderInput={params => <InputData {...params} />}
            />
            <Icon onClick={handleClick}>
              <use href={`${Icons}#icon-calendar`} />
            </Icon>

            <ModalButtonAdd type="submit">Submit</ModalButtonAdd>
          </DataBox>
          <StyledCommentField name="comment" placeholder="Comment" />
          <ErrorMessage name="comment" />
          <button type="submit">ADD</button>
        </StyledForm>
      </Formik>
    </ModalBox>
  );
};

export default ModalAdd;

export const InputData = styled.input`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  margin-top: 42px;
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-top: 0;
  }
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid grey;
  }
`;

export const ModalButtonAdd = styled.button`
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

export const Icon = styled.svg`
  position: relative;
  height: 24px;
  width: 24px;
  @media screen and (min-width: 768px) {
    top: 0px;
    left: 0px;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const StyledSelectField = styled(Field)`
  width: 495px;
  height: 30px;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
`;
const StyledCommentField = styled(Field)`
  width: 495px;
  height: 30px;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
`;
const StyledCheckbox = styled.div`
  margin-bottom: 45px;
`;

const DataBox = styled.div`
  width: 495px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

const ModalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalTitle = styled.h2`
  margin: 0;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35;
`;
