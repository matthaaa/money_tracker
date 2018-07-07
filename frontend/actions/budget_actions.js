import * as BudgetAPIUtil from '../util/budget_api_util';


export const RECEIVE_BUDGET = 'RECEIVE_BUDGET';

export const addBudget = (budget) => dispatch => (
  BudgetAPIUtil.createBudget(budget).then(payload => dispatch(receiveBudget(payload)))
);

export const receiveBudget = (payload) => ({
  type: RECEIVE_BUDGET,
  payload,
})
