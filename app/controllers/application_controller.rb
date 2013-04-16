class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :get_recent_issues

  private
  def get_recent_issues
    @recent_issues = Issue.recent
  end
end
