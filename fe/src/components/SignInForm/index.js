import { gapi } from 'gapi-script';
import { useContext, useEffect } from 'react';

import { GoogleLogin } from 'react-google-login';

import {
  ButtonContainer, Form, FormGroup, Input,
} from './styles';
import Button from '../Button';

import { AuthContext } from '../../contexts/AuthContext';
import GoogleButton from './GoogleButton';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export function SignInForm() {
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
    console.log(response.profileObj);
    handleSetLoggedUser(response.profileObj);
  }

  return (
    <Form>
      <FormGroup>
        <Input type="text" name="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" placeholder="Senha" />
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
