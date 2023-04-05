import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Icons from 'images/icons.svg';

import {
  editTransaction,
  fetchTransactionCategories,
} from '../../../redux/operations.js';
import {
  selectTransactionCategories,
  selectEditModalTransactionId,
  selectTransactions,
} from '../../../redux/Finance/financeSelectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'redux/Finance/financeSlice';
import { useState } from 'react';

const ModalAdd = ({ handleSubmitForm }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    dispatch(fetchTransactionCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Categories = useSelector(selectTransactionCategories);
  const transactionId = useSelector(selectEditModalTransactionId);
  const transactions = useSelector(selectTransactions);

  const { id, transactionDate, type, comment, categoryId, amount } =
    transactions.find(transaction => transaction.id === transactionId);

  const date = new Date(transactionDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = String(date.getUTCFullYear());
  const formattedDate = `${day}-${month}-${year}`;

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onSubmit = values => {
    values.amount =
      values.type === 'INCOME' ? Number(values.amount) : -Number(values.amount);
    dispatch(editTransaction({ id: id, transaction: values }));
    dispatch(toggleModal());
  };

  const renderError = message => <Span>{message}</Span>;

  return (
    <ModalBox>
      <ModalTitle>Edit transactions</ModalTitle>
      <StyledTypebox>
        <StileIncome type={type}>Incom </StileIncome>/
        <StileExpense type={type}>Expense</StileExpense>
      </StyledTypebox>
      <Formik
        initialValues={{
          transactionDate,
          type,
          categoryId,
          amount: String(amount).replace('-', ''),
          comment,
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <StyledForm>
              {type === 'EXPENSE' && (
                <StyledSelectField
                  name="categoryId"
                  placeholder="Select a category"
                  defaultValue={categoryId}
                  as="select"
                  disabled = {true}
                  onChange={event => {
                    setFieldValue('categoryId', event.target.value);
                  }}
                >
                  {type === 'EXPENSE'
                    ? Categories.filter(
                        Categorie => Categorie.type === 'EXPENSE'
                      ).map(Categorie => {
                        return (
                          <option key={Categorie.id} value={Categorie.id}>
                            {Categorie.name}
                          </option>
                        );
                      })
                    : Categories.filter(
                        Categorie => Categorie.type === 'INCOME'
                      ).map(Categorie => {
                        return (
                          <option key={Categorie.id} value={Categorie.id}>
                            {Categorie.name}
                          </option>
                        );
                      })}
                </StyledSelectField>
              )}
              <ErrorMessage name="category" />
              <DataBox>
                <StyledAmountField name="amount" placeholder="0.00" />
                <ErrorMessage name="amount" render={renderError} />
                <StyledDatetime
                  open={isOpen}
                  timeFormat={false}
                  name="transactionDate"
                  value={formattedDate}
                  type="date"
                  // closeOnSelect={true}
                  // maxDate={new Date()}
                  input={true}
                  selected={transactionDate}
                  dateFormat="DD-MM-yyyy"
                  onChange={newValue => {
                    setFieldValue(
                      'transactionDate',
                      moment(newValue).toISOString()
                    );
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
  @media screen and (max-width: 768px) {
    width: 280px;
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
  }
  @media screen and (max-width: 768px) {
    width: 280px;
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
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledAmountField = styled(Field)`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-bottom: 0;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const InputData = styled.input`
  margin-left: 0px;
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  margin-top: 42px;
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-top: 0;
    margin-left: 32px;
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
  top: -6px;
  right: 20px;
  @media screen and (max-width: 768px) {
    top: 52px;
    right: 68px;
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

export const Span = styled.span`
  color: red;
  font-size: 12px;
  margin: 4px 0;
  position: absolute;
  right: 127px;
  top: 20px;
  @media screen and (min-width: 768px) {
    right: 232px;
    top: 22px;
  }
`;

const StyledDatetime = styled(Datetime)`
  font-size: 14px;
  color: #4a56e2;
`;