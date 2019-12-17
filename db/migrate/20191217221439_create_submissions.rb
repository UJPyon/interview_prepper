class CreateSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.string :title
      t.references :submittor, polymorphic: true
      t.string :body
      t.string :answer
      t.timestamps
    end
  end
end
