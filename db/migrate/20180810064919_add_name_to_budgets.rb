class AddNameToBudgets < ActiveRecord::Migration[5.1]
  def change
    add_column :budgets, :name, :string, null: false
  end
end
