class CreateCells < ActiveRecord::Migration[5.1]
  def change
    create_table :cells do |t|
      t.string :year
      t.string :month
      t.string :day
      t.string :label
      t.string :value
      t.string :categories

      t.timestamps
    end
  end
end
