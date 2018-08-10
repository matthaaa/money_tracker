import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {addBudget, requestBudget} from '../../actions/budget_actions';

// Components
import NewBudgetView from './new_budget_view';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  return ({
    currentUser,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addBudget: (budget) => dispatch(addBudget(budget)),
  requestBudget: (budgetId) => dispatch(requestBudget(budgetId)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewBudgetView));
