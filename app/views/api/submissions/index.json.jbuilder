@submissions.each do |sub|
  json.set! sub.id do
    json.partial! 'submission', submission: sub
  end
end