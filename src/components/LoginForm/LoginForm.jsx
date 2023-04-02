import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Container,
  FormLayout,
  Form,
  ButtonLogIn,
  ButtonContainer,
  ButtonRegister,
  LogInInput,
  LogInLabel,
  LogoContainer,
  InputIcon,
  EyeBox,
  ErrorMessage,
} from './LoginForm.styled';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import Icons from '../../images/icons.svg';
import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { signIn } from 'redux/operations';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Пошта має бути робочою, як конячка!')
    .required('На цю пошту летітимуть голуби з листівками вдачі ;)'),
  password: Yup.string()
    .min(6, 'Гей! це якось замало, давай хоча б 6 символів введемо')
    .max(12, 'Ого, це ж тобі не Кобзарик, зупинись на 12 символах')
    .required("Ну, пароль це обов'язково, інакше ми не спрацюємось"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleSubmit = async ({ email, password }, props) => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const user = {
      email: trimmedEmail,
      password: trimmedPassword,
    };

    dispatch(signIn(user))
      .unwrap()
      .catch(error => {
        if (error.code === 'ERR_NETWORK') {
          return toast.error(
            'Oops, something wrong with network, try again later'
          );
        }
        if (error.code === 'ERR_BAD_REQUEST') {
          return toast.error('You have entered an invalid email or password');
        }
      });

    props.resetForm();
  };

  return (
    <Container>
      <FormLayout>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="on" noValidate>
              <LogInLabel>
                <LogInInput
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="E-mail:  example@mail.com"
                />
                <ErrorMessage name="email" component="span" />
                <InputIcon width="21" height="16">
                  <use href={`${Icons}#icon-email`} />
                </InputIcon>
              </LogInLabel>

              <LogInLabel>
                <LogInInput
                  autoComplete="on"
                  type={passwordType}
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="span" />
                <EyeBox onClick={togglePassword}>
                  {passwordType === 'password' ? (
                    <BsEyeSlash fill="#e0e0e0" />
                  ) : (
                    <BsEye fill="#e0e0e0" />
                  )}
                </EyeBox>
                <InputIcon width="16" height="21">
                  <use href={`${Icons}#icon-lock`} />
                </InputIcon>
              </LogInLabel>
              <ButtonContainer>
                <ButtonLogIn type="submit" disabled={isSubmitting}>
                  {'Log in'.toUpperCase()}
                </ButtonLogIn>
                <Link to="/register">
                  <ButtonRegister type="button">
                    {'Register'.toUpperCase()}
                  </ButtonRegister>
                </Link>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </FormLayout>
    </Container>
  );
};
