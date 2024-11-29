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
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, false, true, false, false, false, true] },
  ])
  private durationSubject = new BehaviorSubject<{[key: string]: number}>({})
  private isCheckedSubject = new BehaviorSubject<{[key: string]: boolean}>({})
  private timers: { [key: string]: any } = {};

  students$ = this.studentsSubject.asObservable();
  duration$ = this.durationSubject.asObservable();
  isChecked = this.isCheckedSubject.asObservable();

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
    return this.durationSubject.value[studentName] || 0
  }

  updateDuration(studentName: string, duration: number): void {
    const currentDurations = { ...this.durationSubject.value };
    currentDurations[studentName] = duration;
    this.durationSubject.next(currentDurations);
  }

  getIsCheckedIn(studentName: string): boolean {
    return this.isCheckedSubject.value[studentName] || false;
  }

  updateIsCheckedIn(studentName: string, isCheckedIn: boolean): void {
    const currentCheckedIn = { ...this.isCheckedSubject.value };
    currentCheckedIn[studentName] = isCheckedIn;
    this.isCheckedSubject.next(currentCheckedIn);

    if (isCheckedIn) {
      this.startTimer(studentName);
    } else {
      this.stopTimer(studentName);
    }
  }

  private startTimer(studentName: string): void {
    if (this.timers[studentName]) return; 

    this.timers[studentName] = setInterval(() => {
      const currentDuration = this.getDuration(studentName);
      const updatedDurations = { ...this.durationSubject.value, [studentName]: currentDuration + 1 };
      this.durationSubject.next(updatedDurations);
    }, 1000);
  }

  private stopTimer(studentName: string): void {
    if (this.timers[studentName]) {
      clearInterval(this.timers[studentName]);
      delete this.timers[studentName];
    }
  }
}
