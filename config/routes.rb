Rails.application.routes.draw do


  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE

    #routes for homeowners
    resources :homeowners, only: [:index, :update, :destroy]

    #NewsletterAdmin controller routes
    resources :newsletters_admin, only: [:index, :update]

    #Newletter controller routes
    resources :newsletters, only: [:index, :show, :create, :destroy]
    
    #CCRs and ByLaws Admin controller routes
    resources :ccr_admin, only: [:index, :update]

    #CCr controller routes
    resources :ccr, only: [:index, :show, :create, :destroy]

    #ByLaws controller routes
    resources :bylaws, only: [:index, :show, :create, :destroy]

    #Legal Admin controller routes
    resources :legal_admin, only: [:index, :update]

    #Legal controller routes
    resources :legal, only: [:index, :show, :create, :destroy]

    #Minutes Admin controller routes
    resources :minutes_admin, only: [:index, :update]

    #Minutes controller routes
    resources :minutes, only: [:index, :show, :create, :destroy]

    #Messages controller routes
    resources :messages, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index, :create, :destroy]
    end

    get '/archived_messages', to: 'messages#archivedMessages'
    
    #Discussion admin controller routes
    resources :discussion_admin, only: [:index, :update]


  end

    

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
