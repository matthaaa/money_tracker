Rails.application.routes.draw do
  namespace :api do
    get 'cells/new'
  end

  namespace :api do
    get 'cells/create'
  end

  namespace :api do
    get 'cells/edit'
  end

  namespace :api do
    get 'cells/update'
  end

  namespace :api do
    get 'cells/destroy'
  end

  namespace :api do
    get 'cells/show'
  end

  namespace :api do
    get 'cells/index'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :budgets
    resources :rows
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
