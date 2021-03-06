class User < ApplicationRecord
  validates :username, :email, :first_name, :last_name, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  # TODO: Add initialize method for bio
  after_initialize :ensure_token, :initialize_phone, :initialize_img_url

  attr_reader :password

  # ==================================================
  # Associations
  # ==================================================
  has_many :budgets,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Budget

  # ==================================================
  # Methods
  # ==================================================
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  private
  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def initialize_phone
    self.phone ||= ""
  end

  def initialize_img_url
    self.img_url ||= ""
  end
end
