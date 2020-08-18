import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBelts(){
    return this.http.get("/api/belts");
  }
  getStudents(){
    return this.http.get("/api/students");
  }
  getOneStudent(id){
    return this.http.get(`/api/students/${id}`);
  }
  createStudent(student){
    return this.http.post("/api/students/createStudent", student);
  }
  addBeltToStudent(id, belt){
    return this.http.put(`/api/students/${id}/addBelt`, belt);
  }
  rateStudentAbility(id, student){
    return this.http.put(`/api/students/${id}/rateStudent`, student);
  }
  editStudent(student){
    return this.http.put(`/api/students/${student._id}/editStudent`, student);
  }
  deleteStudent(id){
    return this.http.delete(`/api/students/${id}/deleteStudent`);
  }
}
