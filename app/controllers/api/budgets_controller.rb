class Api::BudgetsController < ApplicationController
  def new
    @budget = budget.new
  end

  def create
    @budget = budget.new(budget_params)
  end

  def edit
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  private
  def budget_params
    params.require(:budget).permit(:name, :user_id)
  end
end
