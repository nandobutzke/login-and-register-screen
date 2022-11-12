import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/inicio" component={Home} />
    </Switch>
  );
}
