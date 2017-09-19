Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE

    #routes for homeowners
    resources :homeowners, only: [:index, :update, :destroy]
    # patch '/homeowners/change_admin_status/:id', to: 'homeowners#change_admin_status', as: 'admin_status'

    #NewsletterAdmin controller routes
    # get '/newsletters_admin/index', to: 'newsletters_admin#index'
    # post '/newsletters_admin/update', to: 'newsletters_admin#update'
    resources :newsletters_admin, only: [:index, :update]

    #Newletter controller routes
    resources :newsletters, only: [:index, :show, :create, :destroy]
    
    #CCRs and ByLaws Admin controller routes
    resources :ccr_admin, only: [:index, :update]

  end

    

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
