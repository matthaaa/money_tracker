class Budget < ApplicationRecord
  validates :user_id, presence: true

  # ==================================================
  # Associations
  # ==================================================
  belongs_to :user,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :cells,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Cell

  has_many :columns,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :budget_id,
    class_name: :Column

end
