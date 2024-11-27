import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, false, true, false, false, false, true] }
  ])

  students$ = this.studentsSubject.asObservable();

  constructor() { }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  addStudent(student : Student): void{
    const currentStudents = this.studentsSubject.value;
    this.studentsSubject.next([...currentStudents, student]);
  }

  updateStudent(updatedStudent: Student, index: any): void{
    const currentStudents = this.studentsSubject.value;
    currentStudents[index] = updatedStudent;
    this.studentsSubject.next([...currentStudents]);
  }

  deleteStudent(index: number): void{
    const currentStudents = this.studentsSubject.value;
    currentStudents.splice(index, 1);
    this.studentsSubject.next([...currentStudents]);
  }

}
