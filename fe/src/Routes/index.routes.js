import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Container>
        <Route path="/inicio" component={Home} />
      </Container>
    </Switch>
  );
}
