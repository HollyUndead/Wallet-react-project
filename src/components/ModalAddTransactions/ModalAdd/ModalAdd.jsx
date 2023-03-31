import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { validationSchema } from '../ModalMain/ModalMain';
import Checkbox from './Checkbox';

const initialValues = {
  type: false,
  category: '',
  amount: '',
  transactionDate: new Date(Date.now()),
  comment: '',
};
const ModalAdd = ({ handleSubmitForm }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const onSubmit = values => {
    handleSubmitForm({ ...values, type: checked });
  };
  return (
    <div>
      <ModalTitle>Add transactions</ModalTitle>
      <div>
        <Checkbox type="checkbox" checked={checked} onChange={handleChange} />
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="comment" placeholder="comment" />
          <ErrorMessage name="comment" />

          <Field name="amount" placeholder="amount" />
          <ErrorMessage name="amount" />

          <Field type="text" name="category" placeholder="category" />
          <ErrorMessage name="category" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalAdd;

const ModalTitle = styled.h2`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.35;
`;
