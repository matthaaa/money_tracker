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

  has_many :cells,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Cell

end
