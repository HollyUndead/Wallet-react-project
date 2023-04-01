// import React from 'react';
// import styled from 'styled-components';

// const ModalEdit = ({ hendalSubmitForm }) => {
//   return (
//     <div>
//       <ModalTitle>Edit transactiocs</ModalTitle>
//       <form onSubmit={hendalSubmitForm}>
//         <input type="text" name="comment" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ModalEdit;

// const ModalTitle = styled.h2`
//   margin: 0;
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 30px;
//   line-height: 1.35;
// `;


import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import Icons from 'images/icons.svg';

const initialValues = {
  type: false,
  category: '',
  amount: '',
  comment: '',
};
const ModalAdd = ({ handleSubmitForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionDate, setTransactionDate] = useState(new Date(Date.now()));


  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onSubmit = values => {
    handleSubmitForm({ ...values});
  };
  return (
    <ModalBox>
      <ModalTitle>Edit transactions</ModalTitle>

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
            <StyledAmountField name="amount" placeholder="0.00" />
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
          </DataBox>
          <StyledCommentField name="comment" placeholder="Comment" />
          <ErrorMessage name="comment" />
          <ModalButtonAdd type="submit">SAVE</ModalButtonAdd>

        </StyledForm>
      </Formik>
    </ModalBox>
  );
};

export default ModalAdd;



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
    /* border-bottom: 1px solid var(--btn-teal-color);
    background-color: var(--text-white-color); */
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

const DataBox = styled.div`
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
`

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
  position: relative;
  height: 20px;
  width: 18px;
  @media screen and (min-width: 768px) {
    top: -6px;
    left: -40px;
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
