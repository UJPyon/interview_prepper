@boxes.each do |box|
  json.set! box.id do
    json.partial! 'box', box: box
  end
end