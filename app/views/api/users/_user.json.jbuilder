# require 'open-uri'
json.extract! user, :username, :id
json.submissionIds user.submissions.pluck(:id)