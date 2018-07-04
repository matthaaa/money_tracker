Rails.application.routes.draw do
  namespace :api do
    get 'columns/new'
  end

  namespace :api do
    get 'columns/create'
  end

  namespace :api do
    get 'columns/edit'
  end

  namespace :api do
    get 'columns/update'
  end

  namespace :api do
    get 'columns/destroy'
  end

  namespace :api do
    get 'columns/show'
  end

  namespace :api do
    get 'columns/index'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :budgets
    resources :cells
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
