import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute, ProtectedRoute} from '../util/route_util';

// Components
import SignUpView from './user_views/signup_view';


const App = ({children}) => (
  <div>
    <section className="main-view">
      <Switch>
        <Route exact path="/signup" component={SignUpView} />
      </Switch>
    </section>
  </div>
);


export default App;
