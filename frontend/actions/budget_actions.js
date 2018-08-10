import * as BudgetAPIUtil from '../util/budget_api_util';


export const RECEIVE_BUDGET = 'RECEIVE_BUDGET';
export const RECEIVE_BUDGETS = 'RECEIVE_BUDGETS';

export const addBudget = (budget) => dispatch => (
  BudgetAPIUtil.createBudget(budget).then(payload => dispatch(receiveBudget(payload)))
);

export const requestBudgets = () => dispatch => (
  BudgetAPIUtil.fetchBudgets().then(budgets => dispatch(receiveBudgets(budgets)))
);

export const requestBudget = (budgetId) => dispatch => (
  BudgetAPIUtil.fetchBudget(budgetId).then(payload => dispatch(receiveBudget(payload)))
);

export const receiveBudgets = (budgets) => ({
  type: RECEIVE_BUDGETS,
  budgets,
})

export const receiveBudget = (payload) => ({
  type: RECEIVE_BUDGET,
  payload,
})
