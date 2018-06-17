import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute, ProtectedRoute} from '../util/route_util';

// Components
import SignUpViewContainer from './user_views/signup_view_container';


const App = ({children}) => (
  <div>
    <section className="main-view">
      <Switch>
        <Route exact path="/signup" component={SignUpViewContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
