class Api::CellsController < ApplicationController
  def new
    @cell = cell.new
  end

  def create
    @cell = cell.new(cell_params)

    if @cell.save!
      @budget = @cell.budget
      render 'api/budgets/show'
    else
      render json: @cell.errors.full_messages, status: 400
    end
  end

  def index
    @cells = cell.all
  end

  def show
    @cell = cell.find_by(id: params[:id])
    if @cell
      render :show
    else
      render json: 'cell not found!', status: 404
    end
  end

  def update
  end

  def edit
  end

  def destroy
    @cell = cell.find_by(id: params[:id])

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
      :value, :column_id
    )
  end
end
