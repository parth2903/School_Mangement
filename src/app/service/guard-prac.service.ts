import { Injectable } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/student.model';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class GuardPracService {
  private students: Student[] = [];

  constructor(private studentService : StudentService) {
    this.studentService.getStudents().subscribe((student) => {
      this.students = student;
    });
   }

  studentCreated(): boolean{
    console.log(this.students.length);
    
    return this.students.length > 3;
  }
}
