require 'spec_helper'

describe IssuesController do
  describe '#index' do
    it 'should fetch all issues' do
      expected_issues = ["issue1", "issue2"]
      Issue.stub(:all => expected_issues)
      get :index
      assigns(:issues).should == expected_issues
    end
  end
end