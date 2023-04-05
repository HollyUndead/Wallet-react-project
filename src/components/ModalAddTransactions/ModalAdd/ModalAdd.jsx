import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Checkbox from './Checkbox';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import Icons from 'images/icons.svg';

import { fetchTransactionCategories } from '../../../redux/operations.js';
import { selectTransactionCategories } from '../../../redux/Finance/financeSelectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { toggleModal } from 'redux/Finance/financeSlice';

const ModalAdd = ({ handleSubmitForm }) => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategorie, setSelectedCategorie] =
    useState('Select a category');
  const [isCategorieDropdownOpen, setIsCatgorieDropdownOpen] = useState(false);
  const categorieDropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        categorieDropdownRef.current &&
        !categorieDropdownRef.current.contains(event.target) &&
        isCategorieDropdownOpen &&
        event.target.className.indexOf('categorieDropDown') === -1
      ) {
        setIsCatgorieDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const toggleCategorieDropdown = e => {
    return setIsCatgorieDropdownOpen(!isCategorieDropdownOpen);
  };

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
    if (values.categoryId === '') {
      return toast.error('select a category');
    }

    handleSubmitForm({ ...values, type: checked });

    dispatch(toggleModal());
    props.resetForm();
  };

  const renderError = message => <Span>{message}</Span>;

  return (
    <ModalBox>
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
                  setSelectedCategorie('Select a category');
                  handleChange();
                  setFieldValue('type', !checked);
                  if (!checked) {
                    setSelectedCategorie('Income');
                    setFieldValue(
                      'categoryId',
                      Categories[Categories.length - 1].id
                    );
                  }
                }}
              />
            </StyledCheckbox>
            <StyledForm>
              {!checked ? (
                <DropDownWrap>
                  <DropDownButton
                    type="button"
                    onClick={toggleCategorieDropdown}
                    className="categorieDropDown"
                  >
                    {selectedCategorie}
                    {isCategorieDropdownOpen ? <ArrowUp /> : <ArrowDown />}
                    {isCategorieDropdownOpen ? (
                      <DropDownList ref={categorieDropdownRef}>
                        {Categories.filter(
                          Categorie => Categorie.type === 'EXPENSE'
                        ).map(categorie => {
                          return (
                            <DropDownItem
                              key={categorie.id}
                              onClick={() => {
                                toggleCategorieDropdown();
                                setSelectedCategorie(categorie.name);
                                setFieldValue('type', categorie.type);
                                setFieldValue('categoryId', categorie.id);
                              }}
                            >
                              {categorie.name}
                            </DropDownItem>
                          );
                        })}
                      </DropDownList>
                    ) : null}
                  </DropDownButton>
                </DropDownWrap>
              ) : (
                <Empty></Empty>
              )}

              <DataBox>
                <StyledAmountField name="amount" placeholder="0.00" />
                <ErrorMessage name="amount" render={renderError} />

                <StyledDatetime
                  open={isOpen}
                  timeFormat={false}
                  name="transactionDate"
                  value={transactionDate}
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

const Empty = styled.div`
  height: 70px;
  width: 100%;
`;

export const ArrowDown = styled(SlArrowDown)`
  margin-left: auto;
`;

export const ArrowUp = styled(SlArrowUp)`
  margin-left: auto;
`;

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
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-bottom: 0;
  }
  &:focus-visible {
    outline: none;
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

const DropDownWrap = styled.div`
  position: relative;
`;

const DropDownButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: left;
  width: 394px;
  height: 30px;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  font-family: 'Circe';
  font-size: 18px;
  color: #000000;
  @media screen and (max-width: 768px) {
    width: 270px;
  }
`;

const DropDownList = styled.div`
  box-sizing: border-box;
  padding: 5px 20px;
  height: 300px;
  position: absolute;
  width: 100%;
  height: 280px;
  top: 30px;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 15px;
  backdrop-filter: blur(25px);

  border-radius: 20px;
  gap: 6px;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;

const DropDownItem = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 5px;
  padding-top: 3px;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
  height: 28px;
  &:hover {
    background: #ffffff;
    border-radius: 30px;
    color: #ff6596;
  }
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
