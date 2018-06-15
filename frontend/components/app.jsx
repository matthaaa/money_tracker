import React from 'react';
// import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

// Components


const App = ({children}) => (
  <div>Hi mom!
    <section className="main-view">
      <Switch>
        // <ProtectedRoute exact path="/" component={HomeFeedContainer} />
        <AuthRoute exact path="/signup" component={SignupViewContainer} />
        <AuthRoute exact path="/login" component={LoginViewContainer} />
        <AuthRoute
          exact
          path="/login/:demo"
          component={LoginViewContainer}
        />
      </Switch>
    </section>
  </div>
);


export default App;
