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
    
end
