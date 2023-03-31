import { Logo } from 'components/Logo/Logo';
import { Formik, ErrorMessage } from 'formik';

import * as yup from 'yup';
import {
  FormLayout,
  RegForm,
  ButtonRegister,
  RegistrationInput,
  RegistrationLabel,
  ButtonContainer,
  ButtonLogIn,
  LogoContainer,
  InputIcon,
  Indicator,
  IndicatorBox,
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { signUp } from 'redux/operations';
import { selectError } from 'redux/Auth/authSelector';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password should be at least 6 characters')
    .max(12, 'Password should be up to 12 characters')
    .matches(/\d+/, 'Should include number')
    .matches(/[a-z]+/, 'Should include lowercase')
    .matches(/[A-Z]+/, 'Should include uppercase')
    // .transform(value => (/\s/.test(value) ? 'error' : 'wrong'))
    // .matches(/\s+/, 'Password has spaces')
    .required('Password is a required field'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should match')
    .required('Confirm your password'),
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9_-]+$/, 'Name contains invalid characters')
    .min(1)
    .max(20, 'First name should be up to 20 characters')
    .required('Please enter your name'),
});

export const RegistrationForm = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [width, setWidth] = useState('3');
  const [bgc, setBgc] = useState('#ff1b00');
  // const [strengthBar, setStrengthBar] = useState('0');
  // const [weakBar, setWeakBar] = useState('50');

  function handleValidation(e) {
    const password = e.target.value;
    let strength = 0;

    // console.log(password.search(/\s+/));
    const validations = [
      password.length > 5,
      password.length < 12,
      password.search(/\d+/) > -1,
      password.search(/[a-z]+/) > -1,
      password.search(/[A-Z]+/) > -1,
    ];
    strength = validations.reduce((acc, cur) => acc + cur);
    console.log(strength);

    if (password === '') {
      strength = 0;
    }

    if (strength === 0) {
      // setStrengthBar('0');
      // setWeakBar('50');
      setWidth('10');
      setBgc('#ff1b00');
    }

    if (strength === 1) {
      // setStrengthBar('20');
      // setWeakBar('50');
      setWidth('20');
      setBgc('#ff1b00');
    }
    if (strength === 2) {
      // setStrengthBar('30');
      // setWeakBar('65');
      setWidth('40');
      setBgc('#ff1b00');
    }
    if (strength === 3) {
      // setStrengthBar('60');
      // setWeakBar('75');
      setWidth('75');
      setBgc('#ff1b00');
    }
    if (strength === 4) {
      // setStrengthBar('80');
      // setWeakBar('100');
      setWidth('100');
      setBgc('#ff1b00');
    }
    if (strength === 5) {
      // setStrengthBar('100');
      // setWeakBar('50');
      setWidth('125');
      setBgc('transparent');
    }
  }

  const handleSubmit = ({ username, email, password }, props) => {
    const trimmedUser = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const user = {
      username: trimmedUser,
      email: trimmedEmail,
      password: trimmedPassword,
    };
    dispatch(signUp(user)).catch(() => console.log('smth'));

    props.resetForm();
  };

  return (
    <div>
      <section>
        <FormLayout>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              email: '',
              password: '',
              passwordConfirmation: '',
              username: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <RegForm autoComplete="off">
                <RegistrationLabel>
                  <RegistrationInput
                    type="email"
                    name="email"
                    placeholder="E-mail:  example@mail.com"
                  />
                  <ErrorMessage name="email" component="div" />

                  <InputIcon width="21" height="16">
                    <use href={`${Icons}#icon-email`} />
                  </InputIcon>
                </RegistrationLabel>
                <RegistrationLabel>
                  <RegistrationInput
                    type="text"
                    name="password"
                    placeholder="Password"
                    onInput={handleValidation}
                  />
                  <ErrorMessage name="password" component="div" />
                  <IndicatorBox color={bgc}>
                    <Indicator
                      // power={strengthBar}
                      // weakness={weakBar}
                      width={width}
                    />
                  </IndicatorBox>

                  <InputIcon width="16" height="21">
                    <use href={`${Icons}#icon-lock`} />
                  </InputIcon>
                </RegistrationLabel>

                <RegistrationLabel>
                  <RegistrationInput
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage name="passwordConfirmation" component="div" />

                  <InputIcon width="16" height="21">
                    <use href={`${Icons}#icon-lock`} />
                  </InputIcon>
                </RegistrationLabel>

                <RegistrationLabel>
                  <RegistrationInput
                    type="text"
                    name="username"
                    placeholder="First name:  Adrian"
                  />
                  <ErrorMessage name="username" component="div" />
                  <InputIcon width="18" height="18">
                    <use href={`${Icons}#icon-account_box`} />
                  </InputIcon>
                </RegistrationLabel>

                <ButtonContainer>
                  <ButtonRegister type="submit" disabled={isSubmitting}>
                    {'Register'.toUpperCase()}
                  </ButtonRegister>
                  <Link to="/login">
                    <ButtonLogIn type="ButtonLogIn">
                      {'Log in'.toUpperCase()}
                    </ButtonLogIn>
                  </Link>
                </ButtonContainer>
              </RegForm>
            )}
          </Formik>{' '}
        </FormLayout>
      </section>
    </div>
  );
};
