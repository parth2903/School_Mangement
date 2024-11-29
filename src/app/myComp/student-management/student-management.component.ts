import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NewStudentDialogComponent } from '../new-student-dialog/new-student-dialog.component';
import { GuardPracService } from '../../service/guard-prac.service';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [MatIconModule,
            CommonModule, 
            MatTableModule, 
            MatDialogModule, 
            TitleCasePipe,
            FormsModule
          ],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent implements OnInit{
  students: Student[] = [];
  searchText: any = '';
  //durations: { [key: string]: number } = {};

  constructor(public dialog: MatDialog, private studentService: StudentService) {}

  ngOnInit(): void{
    this.studentService.students$.subscribe(stu => {
      this.students = stu;
    });

    // this.studentService.duration$.subscribe(durationMap => {
    //   this.durations = durationMap;
    // });
  }

  filteredStudents(): Student[] {
    if (!this.searchText) {
      return this.students; 
    }
    return this.students.filter(student => student.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  createNewStudent(): void {
    const dialogRef = this.dialog.open(NewStudentDialogComponent, {
      width: '1000px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: Student | null) => {
      if (result) {
        console.log(result);
        this.studentService.addStudent(result);
      }
    });
  }

  editStudent(index : number): void{
    const dialogRef = this.dialog.open(NewStudentDialogComponent, {
      width: '1000px',
      height: '500px',
      data: { student: this.students[index] }
    });

    dialogRef.afterClosed().subscribe((updatedStudent: Student | null) => {
      if (updatedStudent) {
        this.studentService.updateStudent(updatedStudent, index);
      }
    });
  }

  deleteStudent(index: number): void {
    this.studentService.deleteStudent(index);
  }

  // getStudentDuration(name: string): number {
  //   return this.durations[name] || 0;
  // }

  formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const pad = (num: number): String =>{
      return String(num).padStart(2, '0')
    };
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  }
}
