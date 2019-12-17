class Api::SubmissionsController < ApplicationController

  def index

  end

  def show

  end

  def new

  end

  def create
    @submission = Submission.new(submission_params)
    if @submission.save
      
    end
  end

  def update

  end

  def destroy

  end

  private
  def submission_params
    params.require(:submission).permit(:title, :body, :answer)
  end

end