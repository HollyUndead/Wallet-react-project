import { Logo } from 'components/Logo/Logo';

import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Container,
  FormLayout,
  RegForm,
  ButtonRegister,
  RegistrationInput,
  RegistrationLabel,
  ButtonContainer,
  ButtonLogIn,
  LogoContainer,
  InputIcon,
  ErrorMessage,
  IndicatorBox,
  Indicator,
  ConfirmBox,
  ConfirmIndicator,
  EyeBox,
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from 'redux/operations';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { handleValidation } from './Validation';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Пошта має бути робочою, як конячка!')
    .required('На цю пошту летітимуть голуби з листівками вдачі ;)'),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_-]+$/,
      'Ну, ви ж доросла людина, такого не можна писати'
    )
    .min(6, 'Гей! це якось замало, давай хоча б 6 символів введемо')
    .matches(/[A-Z]+/, 'Додай велику літеру, щоб у нас була довіра')
    .max(12, 'Ого, це ж тобі не Кобзарик, зупинись на 12 символах')
    .matches(/\d+/, 'Хоча б одну цифру')
    .required("Ну, пароль це обов'язково, інакше ми не спрацюємось"),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Шо, забув що там нафантазував у паролі?'
    )
    .required('Шо, забув що там нафантазував у паролі?'),
  username: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_-]+$/,
      'Ну, ви ж доросла людина, такого не можна писати'
    )
    .min(1, 'Ну, хоч якось тебе кличуть, чи завжди сам приходиш')
    .max(20, 'Ну, прям УВЕСЬ родовід писати не треба')
    .required("Мені цікаво дізнатися твоє ім'я"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const ref = useRef('');
  const [valid, setValid] = useState({
    password: false,
    passwordConfirmation: false,
  });
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
    <Container>
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
            {({ isSubmitting }) => {
              return (
                <RegForm autoComplete="off" noValidate>
                  <RegistrationLabel>
                    <RegistrationInput
                      autoComplete="off"
                      type="email"
                      name="email"
                      placeholder="E-mail:  example@mail.com"
                    />
                    <ErrorMessage name="email" component="span" />

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
                      onFocus={() =>
                        setValid(prevState => ({
                          ...prevState,
                          password: true,
                        }))
                      }
                    />

                    <IndicatorBox color={bgc} show={valid.password}>
                      <Indicator width={width} />
                    </IndicatorBox>

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
                  </RegistrationLabel>

                  <RegistrationLabel>
                    <RegistrationInput
                      autoComplete="off"
                      type={passwordType}
                      name="passwordConfirmation"
                      placeholder="Confirm password"
                      onInput={e => handleConfirmPasswordBar(e)}
                      onFocus={() =>
                        setValid(prevState => ({
                          ...prevState,
                          passwordConfirmation: true,
                        }))
                      }
                    />
                    <ConfirmBox show={valid.passwordConfirmation}>
                      <ConfirmIndicator width={confirmPass} />
                    </ConfirmBox>

                    <ErrorMessage
                      name="passwordConfirmation"
                      component="span"
                    />

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
                  </RegistrationLabel>

                  <RegistrationLabel>
                    <RegistrationInput
                      type="text"
                      name="username"
                      placeholder="First name:  Adrian"
                    />
                    <ErrorMessage name="username" component="span" />
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
              );
            }}
          </Formik>
        </FormLayout>
      </section>
    </Container>
  );
};
