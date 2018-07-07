export const fetchBudgets = () => (
  $.ajax({
    method: "GET",
    url: `api/budgets`,
  })
);

export const fetchBudget = (id) => (
  $.ajax({
    method: "GET",
    url: `api/budgets/${id}`,
  })
);

export const createBudget = (budget) => (
  $.ajax({
    method: "POST",
    url: `api/budgets`,
    data: {budget},
  })
);
