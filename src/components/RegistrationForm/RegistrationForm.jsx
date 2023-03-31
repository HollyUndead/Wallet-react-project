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
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { signUp } from 'redux/operations';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9_-]+$/, 'Password contains invalid characters')
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm password must match the password'
    )
    .required('Confirm password is a required field'),
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9_-]+$/, 'Name contains invalid characters')
    .min(1)
    .max(20, 'First name must be at most 20 characters')
    .required('Please enter your name'),
});

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = ({ username, email, password }, props) => {
    const user = {
      username,
      email,
      password,
    };
    dispatch(signUp(user)).then(() => navigate('/'));
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
                  />
                  <ErrorMessage name="password" component="div" />

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
