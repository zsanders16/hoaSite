Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE

    #routes for homeowners
    resources :homeowners, only: [:index, :update, :destroy]
    # patch '/homeowners/change_admin_status/:id', to: 'homeowners#change_admin_status', as: 'admin_status'

    #adminModules controller routes
    get '/admin_modules_status/newsletters', to: 'admin_modules_status#newsletters'
    get '/admin_modules_status/updateNewslettersActiveStatus', to: 'admin_modules_status#updateNewslettersActiveStatus'

  end

    

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
