import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { StyledButton } from './styles';

import googleIcon from '../../assets/images/icons/google-icon.svg';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function GoogleLoginButton() {
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
  }

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <StyledButton type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
          <span>Ou faça login com o Google</span>
        </StyledButton>
      )}
      buttonText="Ou faça login com o Google"
      onSuccess={handleGoogleResponse}
      onFailure={handleGoogleResponse}
      cookiePolicy="single_host_origin"
    />
  );
}

/*

*/
