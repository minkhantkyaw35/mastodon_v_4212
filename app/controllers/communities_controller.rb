# frozen_string_literal: true

class CommunitiesController < ApplicationController
  before_action :require_account_signature!, if: -> { request.format == :json && authorized_fetch_mode? }

  def index
    @communitites = ["community1", "community2", "community3"]
    respond_to do |format|
      format.html do
        @communitites
      end

      format.json do
        render_with_cache json: @communitites, content_type: 'application/activity+json'
      end
    end
  end
end
