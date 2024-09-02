# frozen_string_literal: true

require 'faker'

namespace :generate do
  desc 'Create a collection and communities'
  task collection_community: :environment do
    account_id = User.where(email: 'admin@gmail.com').first.account.id
    10.times do |i|
      collection_name = Faker::Book.unique.title
      collection_slug = collection_name.parameterize
      collection = PatchCommu::Collection.create!(name: collection_name, slug: collection_slug, sorting_index: i + 1)
      5.times do |j|
        community_name = Faker::Book.unique.title
        community_slug = community_name.parameterize
        PatchCommu::Community.create!(name: community_name, slug: community_slug, account_id: account_id, position: j + 1, patchwork_collection_id: collection.id)
      end
    end
  end
end
