import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Student } from './student';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StudentService {
  headers: Headers;
  options: RequestOptions;
  private studentsUrl = 'http://localhost:3000/students';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.options =  new RequestOptions({headers: this.headers});
  }

  getStudents(): Observable<Student[]> {
    return this.http.get(this.studentsUrl)
    .pipe(
     map((response: Response) => <Student[]>response.json())
    );
  }

  getStudent(id: number) {
    return this.http.get(this.studentsUrl + "/" + id + '.json')
  }

  createStudent(student: Student): Observable<Student> {
  return this.http.post(this.studentsUrl, JSON.stringify(student),this.options)
  .pipe(
    map((res: Response) => res.json())
  );
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url, this.options)
      .pipe(
       map(this.extractData)
      );
  }

  updateStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put(url, JSON.stringify(student),this.options)
    .pipe(
     map((res: Response) => res.json())
    );
    }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error)
    return Promise.reject(error.message || error);
  }
}
