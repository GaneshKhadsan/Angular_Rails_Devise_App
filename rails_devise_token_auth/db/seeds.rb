# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.create!([
    { name: 'Student 001', email: 'Stud01@gmail.com', dob:'2011-08-01', phone:1234567890 },
    { name: 'Student 002', email: 'Stud02@gmail.com', dob:'2012-06-02', phone:1234567890 },
    { name: 'Student 003', email: 'Stud03@gmail.com', dob:'2013-04-03', phone:1234567890 },
    { name: 'Student 004', email: 'Stud04@gmail.com', dob:'2014-03-04', phone:1234567890 }
  ])

User.create(email: 'ganeshskhadsan@gmail.com', nickname: 'ganesh', name: 'Ganesh Khadsan', password: "ganesh123")