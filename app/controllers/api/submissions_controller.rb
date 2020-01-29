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
    @submission.submittor_id = current_user.id
    @submission.box_id = Box.first.id
    if @submission.save
      render :show
    else
      render json: @submission.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @submission = Submission.find(params[:id])
    debugger
    if @submission.update(submission_params)
      render :show
    else
      render json: @submission.errors.full_messages, status: 422
    end
  end

  def destroy
    @submission = Submission.find(params[:id])
    @submission.destroy
    @submissions = Submission.all
    render :index
  end

  private
  def submission_params
    params.require(:submission).permit(:title, :body, :answer, :submittor_id, :box_id)
  end

end