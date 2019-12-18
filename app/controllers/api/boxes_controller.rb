class Api::BoxesController < ApplicationController
  
  def index
    @boxes = Box.all
    render :index  
  end

  def show
    @box = find_box
    render :show
  end

  def create
    @box = Box.new(box_params)
    if @box.save
      render :show
    else
      render json: @box.errors.full_messages, status: 422
    end
  end

  def update
    @box = find_box
    if @box.update(box_params)
      render :show
    else
      render json: @box.errors.full_messages, status: 422
    end
  end

  def destroy
    @box = find_box
# BELOW CODE TO BE IMPLEMENTED AFTER YOU GET BOXES UP AND RUNNING FOR ADMIN PERMISSIONS:
    # if current_user.id == 1
    #   @box.destroy
    #   render :index
    # else
    #   render json: ["Access denied. Admin permission required for that action."], status: 401
    # end
    @box.destroy
    render :index
  end

  private
  def box_params
    params.require(:box).permit(:name, :description)
  end

  def find_box
    Box.find(params[:id])
  end

end