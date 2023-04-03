import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

let listOfYears = [];
const listOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let curYear = new Date().getFullYear();
for (let i = 2000; i <= curYear; i += 1) {
  listOfYears.push(i);
}

export const DropDown = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const onSubmit = e => {
    console.log(e);
  };
  return (
    <div>
      <Formik
        initialValues={{ month: '', year: '' }}
        onChange={onSubmit}
        // validationSchema={validationSchema}
      >
        <Form>
          <Field name="month" as="select">
            <option value="">Month</option>
            {listOfMonth.map((month, index) => {
              return (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              );
            })}
          </Field>

          <Field name="year" placeholder="Select a year" as="select">
            <option value=""></option>
            {listOfYears.map((year, index) => {
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              );
            })}
          </Field>
        </Form>
      </Formik>
    </div>
  );
};
