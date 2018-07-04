require 'test_helper'

class Api::RowsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_rows_new_url
    assert_response :success
  end

  test "should get create" do
    get api_rows_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_rows_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_rows_update_url
    assert_response :success
  end

  test "should get show" do
    get api_rows_show_url
    assert_response :success
  end

  test "should get index" do
    get api_rows_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_rows_destroy_url
    assert_response :success
  end

end
