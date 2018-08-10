class Api::CellsController < ApplicationController
  def new
    @cell = Cell.new
  end

  def create
    @cell = Cell.new(cell_params)

    if @cell.save!
      @budget = @cell.budget
      render 'api/budgets/show'
    else
      render json: @cell.errors.full_messages, status: 400
    end
  end

  def index
    @cells = Cell.all
  end

  def show
    @cell = Cell.find_by(id: params[:id])
    if @cell
      render :show
    else
      render json: 'Cell not found!', status: 404
    end
  end

  def update
  end

  def edit
  end

  def destroy
    @cell = Cell.find_by(id: params[:id])

    @budget = @cell.budget
    if @cell.destroy
      render 'api/budgets/show'
    else
      render json: @cell.errors.full_messages
    end
  end

  private
  def cell_params
    params.require(:cell).permit(
      :value,
    )
  end
end
