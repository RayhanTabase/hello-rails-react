class Api::V1::MessagesController < ApplicationController
  def index
    message = Message.all.sample
    render json: message, status: 200
  end
end
