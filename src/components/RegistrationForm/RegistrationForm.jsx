import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
  EyeBox,
  ConfirmBox,
  ConfirmIndicator,
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Logo } from 'components/Logo/Logo';
import { handleValidation } from './Validation';
import { signUp } from 'redux/operations';

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
  const dispatch = useDispatch();
  const ref = useRef('');
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPass, setConfirmPass] = useState('0');
  const [width, setWidth] = useState('3');
  const [bgc, setBgc] = useState('#ff1b00');

  const handleConfirmPasswordBar = e => {
    const matchPass = e.target.value;
    const mainPass = ref.current.values.password;

    if (mainPass === matchPass) {
      setConfirmPass('100');
      return;
    }

    setConfirmPass('0');
    return;
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleSubmit = ({ username, email, password }, props) => {
    const trimmedUser = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const user = {
      username: trimmedUser,
      email: trimmedEmail,
      password: trimmedPassword,
    };
    dispatch(signUp(user))
      .unwrap()
      .catch(error => {
        if (error.code === 'ERR_NETWORK') {
          return toast.error(
            'Oops, something wrong with network, try again later'
          );
        }
        if (error.code === 'ERR_BAD_REQUEST') {
          return toast.error('User with such email already exists');
        }
      });

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
            innerRef={ref}
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
                    autoComplete="off"
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
                    autoComplete="off"
                    type={passwordType}
                    name="password"
                    placeholder="Password"
                    onInput={e => {
                      handleValidation(e, setBgc, setWidth);
                    }}
                  />
                  <IndicatorBox color={bgc}>
                    <Indicator width={width} />
                  </IndicatorBox>
                  <ErrorMessage name="password" component="div" />
                  <EyeBox onClick={togglePassword}>
                    {passwordType === 'password' ? (
                      <BsEye fill="#e0e0e0" />
                    ) : (
                      <BsEyeSlash fill="#e0e0e0" />
                    )}
                  </EyeBox>

                  <InputIcon width="16" height="21">
                    <use href={`${Icons}#icon-lock`} />
                  </InputIcon>
                </RegistrationLabel>

                <RegistrationLabel>
                  <RegistrationInput
                    autoComplete="off"
                    type={passwordType}
                    name="passwordConfirmation"
                    placeholder="Confirm password"
                    onInput={e => handleConfirmPasswordBar(e)}
                  />
                  <ConfirmBox>
                    <ConfirmIndicator width={confirmPass} />
                  </ConfirmBox>
                  <ErrorMessage name="passwordConfirmation" component="div" />
                  <EyeBox onClick={togglePassword}>
                    {passwordType === 'password' ? (
                      <BsEye fill="#e0e0e0" />
                    ) : (
                      <BsEyeSlash fill="#e0e0e0" />
                    )}
                  </EyeBox>

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
          </Formik>
        </FormLayout>
      </section>
    </div>
  );
};
