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

  formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const pad = (num: number): String =>{
      return String(num).padStart(2, '0')
    };
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  }

  // onCounterUpdate(data: { studentName: string, duration: number }): void {
  //   this.studentCounters[data.studentName] = data.duration; 
  // }
}
