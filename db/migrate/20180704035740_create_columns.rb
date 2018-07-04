class CreateColumns < ActiveRecord::Migration[5.1]
  def change
    create_table :columns do |t|
      t.string :time_type
      t.integer :time_value, null: false
      t.integer :budget_id, null: false

      t.timestamps
    end

    add_index :columns, :budget_id
  end
end
