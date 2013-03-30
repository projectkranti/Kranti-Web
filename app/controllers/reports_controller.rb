class ReportsController < ApplicationController
  def index
    @issues = Issue.all
  end
end
