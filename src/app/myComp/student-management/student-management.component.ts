import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

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
  imports: [MatIconModule,CommonModule, MatTableModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
  students: Student[] = [
    { initials: 'AB', name: 'Alizakibe B', parents: ['Htvttth H'], room: 'Dance', attendance: [false, false, false, false, false, false, false] },
    { initials: 'AS', name: 'Anik S', parents: ['Srfe F'], room: 'Computer Room', attendance: [false, false, false, true, false, false, false] },
    { initials: 'AD', name: 'Ankit D', parents: ['Adea Z'], room: 'Restt', attendance: [false, false, true, false, false, false, true] },
  ];
}
