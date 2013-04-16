class Issue < ActiveResource::Base
  self.site = "http://kranti-api.herokuapp.com"

  NUMBER_OF_RECENT_ISSUES = 5

  def self.recent
    find(:all, :params => {:limit => NUMBER_OF_RECENT_ISSUES})
  end
end