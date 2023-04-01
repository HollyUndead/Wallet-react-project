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
  ErrorMessage,
} from './LoginForm.styled';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import Icons from '../../images/icons.svg';

import { useDispatch } from 'react-redux';
import { signIn } from 'redux/operations';

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

  const handleSubmit = ({ email, password }, props) => {
    const user = {
      email,
      password,
    };
    dispatch(signIn(user));
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
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <LogInLabel>
                  <LogInInput
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
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="span" />
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
      </section>
    </Container>
  );
};
