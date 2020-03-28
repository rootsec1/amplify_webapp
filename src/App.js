import React from 'react';
import { Switch, Route } from 'react-router-dom';
//LOCAL
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    );
  }
};

export default App;
