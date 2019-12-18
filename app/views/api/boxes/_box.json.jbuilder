json.extract! box, :id, :name, :description
json.submissionIds box.submissions.pluck(:id)