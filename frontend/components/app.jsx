import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

// Components
import DashboardView from './dashboard_container';
import SignUpViewContainer from './user_views/signup_view_container';
import LoginViewContainer from './session_views/login_view_container';
import NewBudgetViewContainer from './budget_views/new_budget_view_container';
import NewCellsViewContainer from './budget_views/new_cells_view_container';


const App = ({children}) => (
  <div>
    <section className="main-view">
      <Switch>
        <ProtectedRoute exact path="/budgets/new" component={NewBudgetViewContainer} />
        <ProtectedRoute exact path="/budgets/:budgetId" component={NewCellsViewContainer} />
        <ProtectedRoute exact path="/" component={DashboardView} />
        <AuthRoute exact path="/signup" component={SignUpViewContainer} />
        <AuthRoute exact path="/login" component={LoginViewContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
