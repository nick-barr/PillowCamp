Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do
  resource :user, only: [:create, :show]
  resource :session, only: [:create, :destroy]
  resources :spots, only: [:index, :show]
  resources :reviews, only: [:index, :create]
  resources :bookings, only: [:index, :show, :create, :destroy]
  
end

root "static_pages#root"

end