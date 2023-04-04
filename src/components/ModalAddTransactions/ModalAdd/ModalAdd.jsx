import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Checkbox from './Checkbox';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Icons from 'images/icons.svg';

import { fetchTransactionCategories } from '../../../redux/operations.js';
import { selectTransactionCategories } from '../../../redux/Finance/financeSelectors.js';
import { useSelector, useDispatch } from 'react-redux';
// import { selectIsModalOpen } from 'redux/Auth/authSelector';
import { ToastContainer } from 'react-toastify';
import { toggleModal } from 'redux/Finance/financeSlice';

const ModalAdd = ({ handleSubmitForm }) => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transactionDate, setTransactionDate] = useState(() => {
    const date = new Date();
    return moment(date.toISOString());
  });
  const dispatch = useDispatch();
  // selectIsModalOpen

  useEffect(() => {
    dispatch(fetchTransactionCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Categories = useSelector(selectTransactionCategories);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChangeDate = date => {
    setTransactionDate(date);
    setIsOpen(false);
  };

  const onSubmit = (values, props) => {
    handleSubmitForm({ ...values, type: checked });
  
    dispatch(toggleModal())
    props.resetForm()
  };
  return (
    <ModalBox>
      <ToastContainer />

      <ModalTitle>Add transactions</ModalTitle>

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
            <StyledCheckbox>
              <Checkbox
                type="checkbox"
                checked={checked}
                onChange={() => {
                  handleChange();
                  setFieldValue('type', !checked);
                  if (!checked) {
                    setFieldValue(
                      'categoryId',
                      Categories[Categories.length - 1].id
                    );
                  }
                }}
              />
            </StyledCheckbox>
            <StyledForm>
              <StyledSelectField
                name="categoryId"
                placeholder="Select a category"
                as="select"
                onChange={event => {
                  setFieldValue('categoryId', event.target.value);
                }}
              >
                {!checked && <option value="">Select category</option>}

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
                ADD
              </ModalButtonAdd>
            </StyledForm>
          </>
        )}
      </Formik>
    </ModalBox>
  );
};

export default ModalAdd;

export const ModalButtonAdd = styled.button`
  width: 300px;
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
    width: 270px;
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
  @media screen and (max-width: 768px) {
    width: 270px;
  }
`;
const StyledCheckbox = styled.div`
  margin-bottom: 45px;
`;

const DataBox = styled.div`
  position: relative;
  width: 398px;
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  top: 52px;
    right: 70px;
  @media screen and (min-width: 768px) {
    top: -4px;
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
