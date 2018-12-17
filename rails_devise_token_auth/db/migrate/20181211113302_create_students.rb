class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.date :dob
      t.string :phone

      t.timestamps
    end
  end
end
