# frozen_string_literal: true

class Api::V1::Community::CommunitiesController < Api::BaseController
  include Authorization
  before_action :require_user!

  def index
    @communities = Community.all
    render json: @communities, each_serializer: REST::CommunitySerializer
  end
end
