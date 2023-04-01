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
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from 'redux/operations';

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
    .max(12, 'Ого, це ж тобі не Кобзарик, зупинись на 12 символах')
    .required("Ну, пароль це обов'язково, інакше ми не спрацюємось"),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm password must match the password'
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
    <Container>
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
                  <ErrorMessage name="email" component="span" />

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
                  <ErrorMessage name="password" component="span" />

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
                  <ErrorMessage name="passwordConfirmation" component="span" />

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
            )}
          </Formik>
        </FormLayout>
      </section>
    </Container>
  );
};
