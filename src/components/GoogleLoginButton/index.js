import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { StyledGoogleLoginButton } from './styles';
// import { StyledGoogleLoginButton } from './styles';

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
    <StyledGoogleLoginButton
      clientId={clientId}
      buttonText="Ou faça login com o Google"
      onSuccess={handleGoogleResponse}
      cookiePolicy="single_host_origin"
    />
  );
}

/*
  <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
      <span>Ou faça login com o Google</span>

*/
