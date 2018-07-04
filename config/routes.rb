Rails.application.routes.draw do
  namespace :api do
    get 'budget/new'
  end

  namespace :api do
    get 'budget/create'
  end

  namespace :api do
    get 'budget/edit'
  end

  namespace :api do
    get 'budget/update'
  end

  namespace :api do
    get 'budget/index'
  end

  namespace :api do
    get 'budget/show'
  end

  namespace :api do
    get 'budget/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
