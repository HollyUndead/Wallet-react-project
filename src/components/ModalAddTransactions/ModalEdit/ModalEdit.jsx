import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Icons from 'images/icons.svg';

import { fetchTransactionCategories } from '../../../redux/operations.js';
import {
  selectTransactionCategories,
  selectEditModalTransactionId,
} from '../../../redux/Finance/financeSelectors.js';
import { useSelector, useDispatch } from 'react-redux';

const ModalAdd = ({ handleSubmitForm }) => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionDate, setTransactionDate] = useState(() => {
    const date = new Date();
    return moment(date.toISOString());
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Categories = useSelector(selectTransactionCategories);

  const TransactionId = useSelector(selectEditModalTransactionId);
  console.log(TransactionId);

  const transactionType = 'INCOME';

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChangeDate = date => {
    setTransactionDate(date);
    setIsOpen(false);
  };

  const onSubmit = values => {
    handleSubmitForm({ ...values, type: checked });
  };
  return (
    <ModalBox>
      <ModalTitle>Edit transactions</ModalTitle>
      <StyledTypebox>
        <StileIncome type={transactionType}>Incom </StileIncome>/
        <StileExpense type={transactionType}>Exprns</StileExpense>
      </StyledTypebox>
      <Formik
        initialValues={{
          transactionDate,
          type: false,
          categoryId: '',
          amount: '',
          comment: '',
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <StyledForm>
              <StyledSelectField
                name="categoryId"
                placeholder="Select a category"
                as="select"
                onChange={event => {
                  setFieldValue('categoryId', event.target.value);
                }}
              >
                {!checked && <option value=""></option>}

                {!checked &&
                  Categories.filter(
                    Categorie => Categorie.type === 'EXPENSE'
                  ).map(Categorie => {
                    return (
                      <option key={Categorie.id} value={Categorie.id}>
                        {Categorie.name}
                      </option>
                    );
                  })}
                {checked &&
                  Categories.filter(
                    Categorie => Categorie.type === 'INCOME'
                  ).map(Categorie => {
                    return (
                      <option key={Categorie.id} value={Categorie.id}>
                        {Categorie.name}
                      </option>
                    );
                  })}
              </StyledSelectField>
              <ErrorMessage name="category" />
              <DataBox>
                <StyledAmountField name="amount" placeholder="0.00" />
                <ErrorMessage name="amount" />
                <Datetime
                  open={isOpen}
                  timeFormat={false}
                  name="transactionDate"
                  value={transactionDate}
                  // id="date"
                  type="date"
                  // closeOnSelect={true}
                  // closeOnClickOutside={true}
                  // maxDate={new Date()}
                  input={true}
                  selected={transactionDate}
                  dateFormat="DD-MM-yyyy"
                  onChange={newValue => {
                    setFieldValue(
                      'transactionDate',
                      moment(newValue).toISOString()
                    );
                    handleChangeDate(moment(newValue).toISOString());
                  }}
                  renderInput={params => <InputData {...params} />}
                />
                <Icon onClick={handleClick}>
                  <use href={`${Icons}#icon-calendar`} />
                </Icon>
              </DataBox>
              <StyledCommentField name="comment" placeholder="Comment" />
              <ErrorMessage name="comment" />
              <ModalButtonAdd type="submit" disabled={isSubmitting}>
                SAVE
              </ModalButtonAdd>
            </StyledForm>
          </>
        )}
      </Formik>
    </ModalBox>
  );
};

export default ModalAdd;

const StileIncome = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => (props.type === 'EXPENSE' ? '#E0E0E0' : '#24CCA7')};
  padding-right: 20px;
`;
const StileExpense = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => (props.type === 'INCOME' ? '#E0E0E0' : '#FF6596')};
  padding-left: 20px;
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

const StyledSelectField = styled(Field)`
  width: 394px;
  height: 30px;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  &:focus-visible {
    outline: none;
  }
`;

const StyledCommentField = styled(Field)`
  width: 394px;
  /* height: 30px; */
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  &:focus-visible {
    outline: none;
    /* border-bottom: 1px solid var(--btn-teal-color);
    background-color: var(--text-white-color); */
  }
`;
const StyledTypebox = styled.div`
  color: #e0e0e0;
  margin-bottom: 45px;
`;

const DataBox = styled.div`
  position: relative;
  width: 398px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: row; */
  margin-bottom: 40px;
  /* gap: 30px; */
`;

const StyledAmountField = styled(Field)`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  /* margin-right: 32px; */
  @media screen and (min-width: 768px) {
    width: 181px;
    /* margin-right: 32px; */
    margin-bottom: 0;
  }
  &:focus-visible {
    outline: none;
    /* border-bottom: 1px solid var(--btn-teal-color);
    background-color: var(--text-white-color); */
  }
`;

export const InputData = styled.input`
  margin-left: 32px;
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

export const Icon = styled.svg`
  position: absolute;
  height: 20px;
  width: 18px;
  @media screen and (min-width: 768px) {
    top: -6px;
    right: 20px;
  }
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
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
