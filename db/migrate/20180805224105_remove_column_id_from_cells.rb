class RemoveColumnIdFromCells < ActiveRecord::Migration[5.1]
  def change
    remove_column :cells, :column_id, :integer
    add_column :cells, :budget_id, :integer, null: false
  end
end
