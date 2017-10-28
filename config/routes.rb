# == Route Map
#
#                      Prefix Verb     URI Pattern                                      Controller#Action
#            new_user_session GET      /api/auth/sign_in(.:format)                      devise_token_auth/sessions#new
#                user_session POST     /api/auth/sign_in(.:format)                      devise_token_auth/sessions#create
#        destroy_user_session DELETE   /api/auth/sign_out(.:format)                     devise_token_auth/sessions#destroy
#           new_user_password GET      /api/auth/password/new(.:format)                 devise_token_auth/passwords#new
#          edit_user_password GET      /api/auth/password/edit(.:format)                devise_token_auth/passwords#edit
#               user_password PATCH    /api/auth/password(.:format)                     devise_token_auth/passwords#update
#                             PUT      /api/auth/password(.:format)                     devise_token_auth/passwords#update
#                             POST     /api/auth/password(.:format)                     devise_token_auth/passwords#create
#    cancel_user_registration GET      /api/auth/cancel(.:format)                       devise_token_auth/registrations#cancel
#       new_user_registration GET      /api/auth/sign_up(.:format)                      devise_token_auth/registrations#new
#      edit_user_registration GET      /api/auth/edit(.:format)                         devise_token_auth/registrations#edit
#           user_registration PATCH    /api/auth(.:format)                              devise_token_auth/registrations#update
#                             PUT      /api/auth(.:format)                              devise_token_auth/registrations#update
#                             DELETE   /api/auth(.:format)                              devise_token_auth/registrations#destroy
#                             POST     /api/auth(.:format)                              devise_token_auth/registrations#create
#             new_user_unlock GET      /api/auth/unlock/new(.:format)                   devise/unlocks#new
#                 user_unlock GET      /api/auth/unlock(.:format)                       devise/unlocks#show
#                             POST     /api/auth/unlock(.:format)                       devise/unlocks#create
#     api_auth_validate_token GET      /api/auth/validate_token(.:format)               devise_token_auth/token_validations#validate_token
#            api_auth_failure GET      /api/auth/failure(.:format)                      devise_token_auth/omniauth_callbacks#omniauth_failure
#                             GET      /api/auth/:provider/callback(.:format)           devise_token_auth/omniauth_callbacks#omniauth_success
#                             GET|POST /omniauth/:provider/callback(.:format)           devise_token_auth/omniauth_callbacks#redirect_callbacks
#            omniauth_failure GET|POST /omniauth/failure(.:format)                      devise_token_auth/omniauth_callbacks#omniauth_failure
#                             GET      /api/auth/:provider(.:format)                    redirect(301)
#        status_api_homeowner PATCH    /api/homeowners/:id/status(.:format)             api/homeowners#status
#              api_homeowners GET      /api/homeowners(.:format)                        api/homeowners#index
#               api_homeowner PATCH    /api/homeowners/:id(.:format)                    api/homeowners#update
#                             PUT      /api/homeowners/:id(.:format)                    api/homeowners#update
#                             DELETE   /api/homeowners/:id(.:format)                    api/homeowners#destroy
#       api_homeowners_unlock GET      /api/homeowners/unlock(.:format)                 api/homeowners#unlock
# api_newsletters_admin_index GET      /api/newsletters_admin(.:format)                 api/newsletters_admin#index
#       api_newsletters_admin PATCH    /api/newsletters_admin/:id(.:format)             api/newsletters_admin#update
#                             PUT      /api/newsletters_admin/:id(.:format)             api/newsletters_admin#update
#             api_newsletters GET      /api/newsletters(.:format)                       api/newsletters#index
#                             POST     /api/newsletters(.:format)                       api/newsletters#create
#              api_newsletter GET      /api/newsletters/:id(.:format)                   api/newsletters#show
#                             DELETE   /api/newsletters/:id(.:format)                   api/newsletters#destroy
#         api_ccr_admin_index GET      /api/ccr_admin(.:format)                         api/ccr_admin#index
#               api_ccr_admin PATCH    /api/ccr_admin/:id(.:format)                     api/ccr_admin#update
#                             PUT      /api/ccr_admin/:id(.:format)                     api/ccr_admin#update
#               api_ccr_index GET      /api/ccr(.:format)                               api/ccr#index
#                             POST     /api/ccr(.:format)                               api/ccr#create
#                     api_ccr GET      /api/ccr/:id(.:format)                           api/ccr#show
#                             DELETE   /api/ccr/:id(.:format)                           api/ccr#destroy
#                  api_bylaws GET      /api/bylaws(.:format)                            api/bylaws#index
#                             POST     /api/bylaws(.:format)                            api/bylaws#create
#                   api_bylaw GET      /api/bylaws/:id(.:format)                        api/bylaws#show
#                             DELETE   /api/bylaws/:id(.:format)                        api/bylaws#destroy
#       api_legal_admin_index GET      /api/legal_admin(.:format)                       api/legal_admin#index
#             api_legal_admin PATCH    /api/legal_admin/:id(.:format)                   api/legal_admin#update
#                             PUT      /api/legal_admin/:id(.:format)                   api/legal_admin#update
#             api_legal_index GET      /api/legal(.:format)                             api/legal#index
#                             POST     /api/legal(.:format)                             api/legal#create
#                   api_legal GET      /api/legal/:id(.:format)                         api/legal#show
#                             DELETE   /api/legal/:id(.:format)                         api/legal#destroy
#     api_minutes_admin_index GET      /api/minutes_admin(.:format)                     api/minutes_admin#index
#           api_minutes_admin PATCH    /api/minutes_admin/:id(.:format)                 api/minutes_admin#update
#                             PUT      /api/minutes_admin/:id(.:format)                 api/minutes_admin#update
#                 api_minutes GET      /api/minutes(.:format)                           api/minutes#index
#                             POST     /api/minutes(.:format)                           api/minutes#create
#                  api_minute GET      /api/minutes/:id(.:format)                       api/minutes#show
#                             PATCH    /api/minutes/:id(.:format)                       api/minutes#update
#                             PUT      /api/minutes/:id(.:format)                       api/minutes#update
#                             DELETE   /api/minutes/:id(.:format)                       api/minutes#destroy
#       api_minutes_non_admin GET      /api/minutes_non_admin(.:format)                 api/minutes#index_non_admin
#        api_message_comments GET      /api/messages/:message_id/comments(.:format)     api/comments#index
#                             POST     /api/messages/:message_id/comments(.:format)     api/comments#create
#         api_message_comment DELETE   /api/messages/:message_id/comments/:id(.:format) api/comments#destroy
#                api_messages GET      /api/messages(.:format)                          api/messages#index
#                             POST     /api/messages(.:format)                          api/messages#create
#                 api_message GET      /api/messages/:id(.:format)                      api/messages#show
#                             PATCH    /api/messages/:id(.:format)                      api/messages#update
#                             PUT      /api/messages/:id(.:format)                      api/messages#update
#                             DELETE   /api/messages/:id(.:format)                      api/messages#destroy
#       api_archived_messages GET      /api/archived_messages(.:format)                 api/messages#archivedMessages
#  api_discussion_admin_index GET      /api/discussion_admin(.:format)                  api/discussion_admin#index
#        api_discussion_admin PATCH    /api/discussion_admin/:id(.:format)              api/discussion_admin#update
#                             PUT      /api/discussion_admin/:id(.:format)              api/discussion_admin#update
#        homeowner_api_emails POST     /api/emails/homeowner(.:format)                  api/emails#homeowner
#        committee_api_emails POST     /api/emails/committee(.:format)                  api/emails#committee
#           delete_api_emails POST     /api/emails/delete(.:format)                     api/emails#delete
#                  api_emails GET      /api/emails(.:format)                            api/emails#index
#                             POST     /api/emails(.:format)                            api/emails#create
#                   api_email GET      /api/emails/:id(.:format)                        api/emails#show
#                             PATCH    /api/emails/:id(.:format)                        api/emails#update
#                             PUT      /api/emails/:id(.:format)                        api/emails#update
#                             DELETE   /api/emails/:id(.:format)                        api/emails#destroy
#           active_api_events GET      /api/events/active(.:format)                     api/events#active
#                  api_events GET      /api/events(.:format)                            api/events#index
#                             POST     /api/events(.:format)                            api/events#create
#                   api_event GET      /api/events/:id(.:format)                        api/events#show
#                             PATCH    /api/events/:id(.:format)                        api/events#update
#                             PUT      /api/events/:id(.:format)                        api/events#update
#                             DELETE   /api/events/:id(.:format)                        api/events#destroy
#       active_api_home_pages GET      /api/home_pages/active(.:format)                 api/home_pages#active
# header_image_api_home_pages GET      /api/home_pages/header_image(.:format)           api/home_pages#header_image
#              api_home_pages GET      /api/home_pages(.:format)                        api/home_pages#index
#                             POST     /api/home_pages(.:format)                        api/home_pages#create
#               api_home_page GET      /api/home_pages/:id(.:format)                    api/home_pages#show
#                             PATCH    /api/home_pages/:id(.:format)                    api/home_pages#update
#                             PUT      /api/home_pages/:id(.:format)                    api/home_pages#update
#                             DELETE   /api/home_pages/:id(.:format)                    api/home_pages#destroy
#         access_api_requests POST     /api/requests/access(.:format)                   api/requests#access
#        granted_api_requests POST     /api/requests/granted(.:format)                  api/requests#granted
#         denied_api_requests POST     /api/requests/denied(.:format)                   api/requests#denied
#                api_requests GET      /api/requests(.:format)                          api/requests#index
#        active_api_carousels GET      /api/carousels/active(.:format)                  api/carousels#active
#      inactive_api_carousels GET      /api/carousels/inactive(.:format)                api/carousels#inactive
#               api_carousels GET      /api/carousels(.:format)                         api/carousels#index
#                             POST     /api/carousels(.:format)                         api/carousels#create
#                api_carousel GET      /api/carousels/:id(.:format)                     api/carousels#show
#                             PATCH    /api/carousels/:id(.:format)                     api/carousels#update
#                             PUT      /api/carousels/:id(.:format)                     api/carousels#update
#                             DELETE   /api/carousels/:id(.:format)                     api/carousels#destroy
#            footer_api_links GET      /api/links/footer(.:format)                      api/links#footer
#                   api_links GET      /api/links(.:format)                             api/links#index
#                             POST     /api/links(.:format)                             api/links#create
#                    api_link GET      /api/links/:id(.:format)                         api/links#show
#                             PATCH    /api/links/:id(.:format)                         api/links#update
#                             PUT      /api/links/:id(.:format)                         api/links#update
#                             DELETE   /api/links/:id(.:format)                         api/links#destroy
#           api_board_members GET      /api/board_members(.:format)                     api/board_members#index
#           api_watch_members GET      /api/watch_members(.:format)                     api/watch_members#index
#                             GET      /*other(.:format)                                static#index
# 

Rails.application.routes.draw do


  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE

    #routes for homeowners
    resources :homeowners, only: [:index, :update, :destroy] do
      patch 'status', on: :member
    end
    get '/homeowners/unlock', to: 'homeowners#unlock'

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
    resources :minutes, only: [:index, :show, :create, :update, :destroy]
    get '/minutes_non_admin', to: 'minutes#index_non_admin'

    #Messages controller routes
    resources :messages, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index, :create, :destroy]
    end

    get '/archived_messages', to: 'messages#archivedMessages'

    #Discussion admin controller routes
    resources :discussion_admin, only: [:index, :update]

    # Routes for Email controller
    resources :emails, shallow: true do
      post 'homeowner', on: :collection
      post 'committee', on: :collection
      post 'delete', on: :collection
    end

    #Routes for Event controller
    resources :events, shallow: true do
      get 'active', on: :collection
    end

    # Routes for Home Page Controller
    resources :home_pages, shallow: true do
      get 'active', on: :collection
      get 'header_image', on: :collection
    end

    # Routes for access requests
    resources :requests, only: [:index], shallow: true do
      post 'access', on: :collection
      post 'granted', on: :collection
      post 'denied', on: :collection
    end

    # Routes for image Carousel Controller
    resources :carousels, shallow: true do
      get 'active', on: :collection
      get 'inactive', on: :collection
    end

    # Routes for Links Controller
    resources :links, shallow: true do
      get 'footer', on: :collection
    end

    resources :board_members, only: [ :index ]
    resources :watch_members, only: [ :index ]


  end



  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
