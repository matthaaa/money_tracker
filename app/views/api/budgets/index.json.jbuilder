@budgets.each do |budget|
  json.set! budget.id do
    json.partial! 'api/budgets/budget', budget: budget
  end
end
