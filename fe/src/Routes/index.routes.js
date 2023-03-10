import {
  Redirect, Route, Switch,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { useContext } from 'react';

import Home from '../pages/Home';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import { AuthContext } from '../contexts/AuthContext';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(AuthContext);

  if ((isPrivate && !authenticated)) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute path="/login" exact component={SignIn} />
      <CustomRoute path="/register" component={Register} />
      <CustomRoute isPrivate path="/inicio" component={Home} />
    </Switch>
  );
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.bool,
};

CustomRoute.defaultProps = {
  isPrivate: false,
};
