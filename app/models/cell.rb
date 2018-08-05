class Cell < ApplicationRecord
  validates :user_id, presence: true
  # ==================================================
  # Associations
  # ==================================================
  belongs_to :budget,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Budget,

  # belongs_to :column,
  #   dependent: :destroy,
  #   primary_key: :id,
  #   foreign_key: :column_id,
  #   class_name: :Column,

end
