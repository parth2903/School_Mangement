import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, true, true, true, false, false, true], isCheckedIn: false, duration: 0 },
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, true, true, true, false, false, true], isCheckedIn: false, duration: 0 },
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, true, false, true, false, true, false], isCheckedIn: false, duration: 0 },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, true, true, true, false, false, true], isCheckedIn: false, duration: 0 },
  ])
  //private durationSubject = new BehaviorSubject<{[key: string]: number}>({})
  //private isCheckedSubject = new BehaviorSubject<{[key: string]: boolean}>({})
  private timers: { [key: string]: any } = {};

  students$ = this.studentsSubject.asObservable();
  //duration$ = this.durationSubject.asObservable();
  //isChecked$ = this.isCheckedSubject.asObservable();

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

  getDuration(studentName : string): number{
    const student = this.studentsSubject.value.find(s => s.name == studentName)
    return student?.duration || 0
    //return this.durationSubject.value[studentName] || 0
  }

  updateDuration(studentName: string, duration: number): void {
    const currentStudents = this.studentsSubject.value;
    const student = currentStudents.find(s => s.name === studentName);
  
    if (student) {
      student.duration = duration;
      this.studentsSubject.next([...currentStudents]);  
    }
    // const currentDurations = { ...this.durationSubject.value };
    // currentDurations[studentName] = duration;
    // this.durationSubject.next(currentDurations);
  }

  getIsCheckedIn(studentName: string): boolean {
    const student = this.studentsSubject.value.find(s => s.name === studentName);
    return student?.isCheckedIn || false;
  }

  updateIsCheckedIn(studentName: string, isCheckedIn: boolean): void {
    const currentStudents = this.studentsSubject.value;
    const student = currentStudents.find(s => s.name === studentName);
  
    if (student) {
      student.isCheckedIn = isCheckedIn;
      this.studentsSubject.next([...currentStudents]); 
    }

    if (isCheckedIn) {
      this.startTimer(studentName);
    } else {
      this.stopTimer(studentName);
    }
  }

  private startTimer(studentName: string): void {
    if (this.timers[studentName]) 
      return; 

    this.timers[studentName] = setInterval(() => {
      const currentDuration = this.getDuration(studentName);
      const updatedDurations = currentDuration + 1;
      this.updateDuration(studentName, updatedDurations);
    }, 1000);
  }

  private stopTimer(studentName: string): void {
    if (this.timers[studentName]) {
      clearInterval(this.timers[studentName]);
      delete this.timers[studentName];
    }
  }
}
