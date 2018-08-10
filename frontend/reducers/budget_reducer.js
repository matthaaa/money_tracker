import {merge} from 'lodash';

import {
  RECEIVE_BUDGETS,
  RECEIVE_BUDGET,
} from '../actions/budget_actions';

const budgetReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
      case RECEIVE_BUDGETS:
        return merge({}, action.budgets);
      case RECEIVE_BUDGET:
        return merge({}, oldState, {[action.payload.budget.id]: action.payload.budget});
      default:
        return oldState;
  }
}
