class AddBudgetIdToCells < ActiveRecord::Migration[5.1]
  def change
    add_column :cells, :budget_id, :integer, null: false
  end
end
