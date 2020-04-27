import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Student{
  constructor(
    public stdid:string,
    public stdname:string,
    public stdadd:string,
    public stdcity:string,
    public stdstate:string,
    public stdzip:string,
    public stddate:string,
    public stdtel:string,
    public stdemail:string,
    public stdurl:string,
    public stdmonth:string,
    public stdyear:string,
    public stdradio:string,
    public stdlike:string,
    public stddata:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  // serviceURL: string;
  // liveInterviewWindow: any;
  // private root: string;

  private usersUrl: string;
  private studentList:Array<String>=[];
  private std:Array<Student>=[];
  private stdDetail:Student;



  constructor( private http:HttpClient) {
  }

 // private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'public', 'Access-Control-Allow-Origin': '*','changeOrigin':'true'});

  // getEmployees()
  // {
  //   console.log("test call");
  //   return this.http.get<Employee[]>('http://localhost:8080/employees');
  // }

  // setEmployees(employee){
  //   console.log("adding employee");

  //   return this.http.post<Employee[]>('http://localhost:8080/employees',employee);
  // }

  getStdDetail(stdid){
    return this.http.get<Student>('http://localhost:8080/students'+'/'+stdid)
  }

  getStudents()
  {
    return this.http.get<Student[]>('http://localhost:8080/students');
  }

  setStudent(student){
     return this.http.post('http://localhost:8080/students', student);
  }

}
