class Column < ApplicationRecord
  # ==================================================
  # Associations
  # ==================================================
  belongs_to :budget,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Budget

  # TODO: Remove these if columns are not used and removed from schema.
  # has_many :cells,
  #   dependent: :destroy,
  #   primary_key: :id,
  #   foreign_key: :budget_id,
  #   class_name: :Cell

end
