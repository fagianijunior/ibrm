class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params.merge(user_id: current_user.id))
  end

  def show
    post = Post.find(params[:id])
    respond_with post
  end

  private
  def post_params
    params.require(:post).permit(:title, :cover, :content)
  end
end
