# frozen_string_literal: true

# == Schema Information
#
# Table name: communities
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Community < ApplicationRecord

  def as_json(options = {})
    super(options)
  end
  
end
