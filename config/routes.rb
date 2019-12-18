Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :submissions, only: [:show, :index, :create, :update, :destroy]
    resources :boxes, only: [:show, :index, :create, :update, :destroy]
  end

end
