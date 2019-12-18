class Api::SubmissionsController < ApplicationController

  def index
    @submissions = Submission.all
    render :index
  end
  
  def show
    @submission = Submission.find(params[:id])
    render :show
  end

  def create
    @submission = Submission.new(submission_params)
    if @submission.save
      render :show
    else
      render json: @submission.errors.full_messages, status: 422
    end
  end

  def update
    @submission = Submission.find(params[:id])
    if @submission.update(submission_params)
      render :show
    else
      render json: @submission.errors.full_messages, status: 422
  end

  def destroy
    @submission = Submission.find(params[:id])
    @submission.destroy
    render :index
  end

  private
  def submission_params
    params.require(:submission).permit(:title, :body, :answer)
  end

end