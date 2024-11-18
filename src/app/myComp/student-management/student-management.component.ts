import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NewStudentDialogComponent } from '../../new-student-dialog/new-student-dialog.component';

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
  imports: [MatIconModule,CommonModule, MatTableModule, MatDialogModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
  students: Student[] = [
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Restt', attendance: [false, false, true, false, false, false, true] },
  ];

  constructor(public dialog: MatDialog) {}

  openNewStudentDialog(): void {
    const dialogRef = this.dialog.open(NewStudentDialogComponent, {
      width: '1000px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe((result: Student | null) => {
      if (result) {
        console.log(result);
        this.students.push(result);
      }
    });
  }
}
