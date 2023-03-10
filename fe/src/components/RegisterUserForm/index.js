import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ButtonContainer,
  Form,
  Input,
} from '../Form';
import FormGroup from '../FormGroup';
import GoogleLogin from '../GoogleLogin';

import Button from '../Button';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isValidEmail';

export function RegisterUserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors, setError, removeError, getMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (event.target.value) {
      removeError('name');
    }
  }

  function handleValidateName(event) {
    if (!event.target.value) {
      setError({ field: 'name', message: "O campo 'Nome' é obrigatório!" });
    } else {
      removeError('name');
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

  const isFormValid = ((name && email && password) && errors.length === 0);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      password,
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getMessageByFieldName('name')}>
        <Input
          type="text"
          name="name"
          error={getMessageByFieldName('name')}
          placeholder="Nome do Usuário"
          onChange={handleNameChange}
          onBlur={handleValidateName}
        />
      </FormGroup>
      <FormGroup error={getMessageByFieldName('email')}>
        <Input
          type="email"
          name="email"
          error={getMessageByFieldName('email')}
          placeholder="E-mail"
          onChange={handleEmailChange}
          onBlur={handleValidateEmail}
        />
      </FormGroup>
      <FormGroup error={getMessageByFieldName('password')}>
        <Input
          type="password"
          name="password"
          error={getMessageByFieldName('password')}
          placeholder="Senha"
          onChange={handlePasswordChange}
          onBlur={handleValidatePassword}
        />
      </FormGroup>
      <ButtonContainer>
        <span className="already-registered">Já possuí um cadastro? <Link to="/login">Entrar</Link></span>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          Registrar
        </Button>
        <GoogleLogin />
      </ButtonContainer>
    </Form>
  );
}

RegisterUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
