class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      debugger
      login!(@user) 
      render 'api/users/show'
    else
      debugger
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.all
    render 'api/users/index'
  end

  private 
  
  def user_params
    debugger
    params.require(:user).permit(:username, :password) 
  end

end
