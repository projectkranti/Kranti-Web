KrantiWeb::Application.routes.draw do
  root :to => 'pages#home'
  resources :issues, :only => [:index]
end
