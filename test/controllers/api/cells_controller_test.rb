require 'test_helper'

class Api::CellsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_cells_new_url
    assert_response :success
  end

  test "should get create" do
    get api_cells_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_cells_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_cells_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cells_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_cells_show_url
    assert_response :success
  end

  test "should get index" do
    get api_cells_index_url
    assert_response :success
  end

end
