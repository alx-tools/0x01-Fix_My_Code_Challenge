Rails.application.routes.draw do
  devise_for :users
  devise_for :installs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts do
    resources :comments
  end
  root "posts#index"

  get '/about', to: 'pages#about'
end
