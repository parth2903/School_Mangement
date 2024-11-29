import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrl: './check-in-out.component.css'
})
export class CheckInOutComponent implements OnInit{
  students: Student[] = [];
  studentCounters: { [key: string]: number } = {};

  constructor(private studentService: StudentService){}

  ngOnInit(): void{
    this.studentService.students$.subscribe(stu => {
      this.students = stu;
    })

    this.studentService.duration$.subscribe(durations => {
      this.studentCounters = durations;
      //console.log(this.studentCounters);
      
    });
  }

  // onCounterUpdate(data: { studentName: string, duration: number }): void {
  //   this.studentCounters[data.studentName] = data.duration; 
  // }
}
