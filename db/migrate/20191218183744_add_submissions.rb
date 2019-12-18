class AddSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.string :answer, null: false
      t.integer :submittor_id, null: false
      t.integer :box_id, null: false
      t.timestamps
    end
  end
end
