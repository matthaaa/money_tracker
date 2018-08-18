import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  addBudget,
  requestBudget,
  requestBudgets,
} from '../../actions/budget_actions';

// Components
import NewBudgetView from './new_budget_view';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const budgets = currentUser.budgets;

  return ({
    currentUser,
    budgets,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addBudget: (budget) => dispatch(addBudget(budget)),
  requestBudget: (budgetId) => dispatch(requestBudget(budgetId)),
  requestBudgets: () => dispatch(requestBudgets()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewBudgetView));
