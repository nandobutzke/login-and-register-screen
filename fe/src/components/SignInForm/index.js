import PropTypes from 'prop-types';

import { gapi } from 'gapi-script';
import { useContext, useEffect, useState } from 'react';

import { GoogleLogin } from 'react-google-login';

import {
  ButtonContainer, Form, FormGroup, Input,
} from './styles';
import Button from '../Button';

import { AuthContext } from '../../contexts/AuthContext';
import GoogleButton from './GoogleButton';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSetLoggedUser } = useContext(AuthContext);

  useEffect(() => {
    function startLogin() {
      gapi.client.init({
        clientId,
        scope: '',
      });
    }

    gapi.load('client:auth2', startLogin);
  }, []);

  function handleGoogleResponse(response) {
    handleSetLoggedUser(response.profileObj);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      email,
      password,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input type="text" name="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)} />
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">Entrar</Button>
        <GoogleLogin
          clientId={clientId}
          render={GoogleButton}
          buttonText="Ou faça login com o Google"
          onSuccess={handleGoogleResponse}
          onFailure={handleGoogleResponse}
          cookiePolicy="single_host_origin"
        />
      </ButtonContainer>
    </Form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
