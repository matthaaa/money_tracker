class AddColumnIdToCells < ActiveRecord::Migration[5.1]
  def change
    add_column :cells, :column_id, :integer, null: false
  end
end
