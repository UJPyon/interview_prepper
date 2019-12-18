class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user) 
      render :show
    else
      errors = @user.errors.full_messages.map do |error|
        if error == "Username can't be blank"
          error = "Please enter a username"
        elsif error == "Password is too short (minimum is 6 characters)"
          error = "Password must be at least 6 characters"
        elsif error == "Username has already been taken"
          error = "An account with this username already exists"
        else
          error
        end
      end
      render json: errors, status: 401
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
    params.require(:user).permit(:username, :password) 
  end

end
