require 'test_helper'

class Api::ColumnsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_columns_new_url
    assert_response :success
  end

  test "should get create" do
    get api_columns_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_columns_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_columns_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_columns_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_columns_show_url
    assert_response :success
  end

  test "should get index" do
    get api_columns_index_url
    assert_response :success
  end

end
