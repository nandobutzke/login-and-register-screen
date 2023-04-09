import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ButtonContainer,
  Form,
  Input,
} from '../Form';
import FormGroup from '../FormGroup';

import Button from '../Button';
import GoogleLoginButton from '../GoogleLoginButton';
import useForm from '../../hooks/useForm';

export function RegisterUserForm({ onSubmit }) {
  const {
    handleSubmit,
    getMessageByFieldName,
    handleNameChange,
    handleValidateName,
    handleEmailChange,
    handleValidateEmail,
    handlePasswordChange,
    handleValidatePassword,
    isRegisterFormValid,
    isSubmitting,
    handleGoogleLogin,
  } = useForm(onSubmit);

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
        <span className="already-registered">Já possuí um cadastro? <Link to="/">Entrar</Link></span>
        <Button
          type="submit"
          disabled={!isRegisterFormValid}
          isLoading={isSubmitting}
        >
          Registrar
        </Button>
        <GoogleLoginButton type="button" onClick={handleGoogleLogin} />
      </ButtonContainer>
    </Form>
  );
}

RegisterUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
