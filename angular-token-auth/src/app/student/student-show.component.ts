import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StudentService } from './student.service';
import { Observable } from 'rxjs';
import { Student } from './student';
import 'rxjs/add/operator/mergeMap'

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}
  @Input() student: Student;
  ngOnInit()  {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/students';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let postRequest = this.route.params
      .flatMap((params: Params) =>
        this.studentService.getStudent(+params['id']));
    postRequest.subscribe(response => this.student = response.json());
  }

  update(student: Student) {
    this.editBtnClicked = true;
    this.studentService.updateStudent(student)
      .subscribe(data => {
        return true
      },
     
      error => {
        console.log('Error updating student');
        return Observable.throw(error);
      })
  }

  delete(student: Student) {
    this.studentService.deleteStudent(this.student.id)
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
        alert("Student Deleted Successfully");
        this.router.navigateByUrl('/students/list')

       },
        error => this.errorMessage = error);
  }

  onUpdatedClicked() {
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
    
    //window.location.reload();
    alert("Student Updated Successfully");
    this.router.navigateByUrl('/students/list')
  }

}