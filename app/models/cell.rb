class Cell < ApplicationRecord
  validates :value, presence: true
  # ==================================================
  # Associations
  # ==================================================
  belongs_to :budget,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Budget

  # TODO: Remove these if columns are not used and removed from schema.
  # belongs_to :column,
  #   dependent: :destroy,
  #   primary_key: :id,
  #   foreign_key: :column_id,
  #   class_name: :Column,

end
