Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do
  resource :session, only: [:create, :destroy]
  resources :spots, only: [:index, :show]
  resources :reviews, only: [:index, :create, :destroy]
  resources :bookings, only: [:index, :show, :create, :destroy]
  resources :user, only: [:create, :show]
  # resource :user, only: [:create, :show] do
  #   resources :bookings , only: [:index, :show, :create]
  # end
end

root "static_pages#root"

end