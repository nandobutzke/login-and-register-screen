import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { GoogleLogin as LoginGoogleComponent } from 'react-google-login';
import googleIcon from '../../assets/images/icons/google-icon.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledGoogleButton } from './styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleButton({ onClick }) {
  return (
    <StyledGoogleButton
      type="button"
      onClick={onClick}
    >
      <img src={googleIcon} alt="Logo do Google, Letra G com várias cores" />
      <span>Ou faça login com o Google</span>
    </StyledGoogleButton>
  );
}

export default function GoogleLogin() {
  const { handleSetGoogleLoggedUser } = useContext(AuthContext);

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
    handleSetGoogleLoggedUser(response.profileObj);
  }

  return (
    <LoginGoogleComponent
      clientId={clientId}
      render={GoogleButton}
      onSuccess={handleGoogleResponse}
      onFailure={handleGoogleResponse}
      cookiePolicy="single_host_origin"
    />
  );
}

GoogleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
