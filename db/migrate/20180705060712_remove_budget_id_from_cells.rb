class RemoveBudgetIdFromCells < ActiveRecord::Migration[5.1]
  def change
    remove_column :cells, :budget_id, :integer
  end
end
