Rails.application.routes.draw do
  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
    # resources :users, only:[:create ]
    # resource :session, only:[:create, :destroy]
    resources :deck, only: [:create, :destroy, :index, :show, :update]
    resources :flashcard, only: [:create, :update, :index, :show, :destroy]
  end
end
