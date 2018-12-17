import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent{
  student = new Student;
  submitted: boolean = false; // check if form is submitted
  
  constructor(private studentService: StudentService) { }

  createStudent(student: Student) {
    this.submitted = true;
    this.studentService.createStudent(student)
      .subscribe(data => { return true },
        error => {
          console.log("Error adding student");
        }
      );
  }
}
