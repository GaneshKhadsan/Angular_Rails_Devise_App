import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Observable } from 'rxjs';
import { timer } from 'rxjs/observable/timer';



@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentListComponent implements OnInit{
  students: Student[];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }
  
  ngOnInit() {
    
    this.studentService.getStudents()
    .subscribe(() => this.getStudents());
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  goToShow(student: Student): void {
    let studentLink = ['/students', student.id];
    this.router.navigate(studentLink);
  }

}
