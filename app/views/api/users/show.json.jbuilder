json.user do
  json.partial! 'api/users/user', user: @user
end

json.budgets({})
json.budgets do
  @user.budgets.each do |budget|
    json.set! budget.id do
      json.partial! 'api/budgets/budget', budget: budget
    end
  end
end
