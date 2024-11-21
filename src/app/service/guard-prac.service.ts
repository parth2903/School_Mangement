import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardPracService {
  private students: any[] = [];

  constructor() { }

  setStudentsReference(students: any[]): void{
    this.students = students;
  }

  studentCreated(): boolean{
    return this.students.length > 3;
  }
}
