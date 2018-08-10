class Api::BudgetsController < ApplicationController
  def new
    @budget = Budget.new
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.save!
      render :show
    else
      render json: @budget.errors.full_messages, status: 400
    end
  end

  def edit
  end

  def update
  end

  def index
    if params[:user_id]
      @budgets = Budget.where(user_id: params[:user_id])
      render :index
    else
      @budgets = Budget.all
      render :index
    end
  end

  def show
    @budget = Budget.find_by(id: params[:id])
    if @budget
      render :show
    else
      render json: 'Budget not found!', status: 404
    end
  end

  def destroy
  end

  private
  def budget_params
    params.require(:budget).permit(:name, :user_id)
  end
end
