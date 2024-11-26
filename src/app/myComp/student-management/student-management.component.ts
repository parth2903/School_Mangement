import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NewStudentDialogComponent } from '../../new-student-dialog/new-student-dialog.component';
import { GuardPracService } from '../../service/guard-prac.service';
import { FormsModule } from '@angular/forms';

interface Student {
  initials: string;
  name: string;
  parents: string[];
  room: string;
  attendance: boolean[];
}
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
export class StudentManagementComponent {
  students: Student[] = [
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Rest', attendance: [false, false, true, false, false, false, true] }
  ];

  searchText: any = '';

  filteredStudents(): Student[] {
    if (!this.searchText) {
      return this.students; 
    }
    return this.students.filter(student => student.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  constructor(public dialog: MatDialog, private setStudent: GuardPracService) {
    this.setStudent.setStudentsReference(this.students);
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
        this.students.push(result);
        this.setStudent.setStudentsReference(this.students);
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
        this.students[index] = updatedStudent; 
      }
    });
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
    this.setStudent.setStudentsReference(this.students);
  }
}
