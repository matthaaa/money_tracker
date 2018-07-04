class CreateBudgets < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :budgets, :user_id
  end
end
