import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

import {
  ButtonContainer, Form, Input,
} from '../Form';
import FormGroup from '../FormGroup';
import Button from '../Button';

// import GoogleLogin from '../GoogleLogin';
import isEmailValid from '../../utils/isValidEmail';
// import delay from '../../utils/delay';
import useErrors from '../../hooks/useErrors';
import { AuthContext } from '../../contexts/AuthContext';
import GoogleLoginButton from '../GoogleLoginButton';

export function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleGoogleLogin } = useContext(AuthContext);

  const {
    errors, setError, removeError, getMessageByFieldName,
  } = useErrors();

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (event.target.value) {
      removeError('password');
    }
  }

  function handleValidatePassword(event) {
    if (!event.target.value) {
      setError({ field: 'password', message: "O campo 'Senha' é obrigatório!" });
    } else {
      removeError('password');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (isEmailValid(event.target.value)) {
      removeError('email');
    }
  }

  function handleValidateEmail(event) {
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido!' });
    } else {
      removeError('email');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      email,
      password,
    });

    setIsSubmitting(false);
  }

  const isFormValid = ((email && password) && isEmailValid(email) && errors.length === 0);

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
          disabled={!isFormValid}
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
