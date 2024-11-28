import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../service/student.service';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrl: './child-card.component.css'
})
export class ChildCardComponent implements OnInit{
  @Input() student!: Student;
  @Output() counterUpdated = new EventEmitter<{ studentName: string, duration: number }>();

  today: Date = new Date();
  isCheckedIn: boolean= false;
  duration: number = 0;

  constructor(private studentService : StudentService){}

  ngOnInit(): void {
      if(this.student){
        this.duration = this.studentService.getDuration(this.student.name);
        this.isCheckedIn = this.studentService.getIsCheckedIn(this.student.name);
      }
  }

  toggleCheckInOut(): void{
    this.isCheckedIn = !this.isCheckedIn;
    this.studentService.updateIsCheckedIn(this.student.name, this.isCheckedIn);
  }
}
