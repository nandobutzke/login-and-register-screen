import PropTypes from 'prop-types';

import {
  ButtonContainer, Form, Input,
} from '../Form';
import FormGroup from '../FormGroup';
import Button from '../Button';

import GoogleLoginButton from '../GoogleLoginButton';
import useForm from '../../hooks/useForm';

export function SignInForm({ onSubmit }) {
  const {
    handleSubmit,
    getMessageByFieldName,
    handleEmailChange,
    handleValidateEmail,
    handlePasswordChange,
    handleValidatePassword,
    isSignInFormValid,
    isSubmitting,
    handleGoogleLogin,
  } = useForm(onSubmit);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getMessageByFieldName('email')}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          error={getMessageByFieldName('email')}
          onChange={handleEmailChange}
          onBlur={handleValidateEmail}
        />
      </FormGroup>
      <FormGroup error={getMessageByFieldName('password')}>
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          error={getMessageByFieldName('password')}
          onChange={handlePasswordChange}
          onBlur={handleValidatePassword}
        />
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isSignInFormValid}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
        <GoogleLoginButton type="button" onClick={handleGoogleLogin} />
      </ButtonContainer>
    </Form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
