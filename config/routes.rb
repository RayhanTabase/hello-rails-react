Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
  resources :messages
  get "/greetings", to: "greetings#index"
  root "messages#index"
end
