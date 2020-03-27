import React from 'react';
import { Switch, Route } from 'react-router-dom';
//LOCAL
import SignIn from './pages/SignIn';

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SignIn} />
      </Switch>
    );
  }
};

export default App;
