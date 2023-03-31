import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import {
  FormLayout,
  Form,
  ButtonLogIn,
  ButtonContainer,
  ButtonRegister,
  LogInInput,
  LogInLabel,
  LogoContainer,
  InputIcon,
} from './LoginForm.styled';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import Icons from '../../images/icons.svg';

import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'redux/operations';
import { selectError } from 'redux/Auth/authSelector';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  // console.log(error);

  const handleSubmit = ({ email, password }, props) => {
    const user = {
      email,
      password,
    };
    dispatch(signIn(user));
    // console.log(dispatch(signIn(user))
    if (error !== null) {
      console.log('hello from error');
    }

    props.resetForm();
  };
  // .unwrap().catch(console.log(error.request.status));

  return (
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
              <ErrorMessage name="email" component="div" />
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
              <ErrorMessage name="password" component="div" />
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
  );
};
