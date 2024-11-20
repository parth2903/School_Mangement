import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
//import { Component, ChangeDetectionStrategy} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-new-student-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    ],
  templateUrl: './new-student-dialog.component.html',
  styleUrl: './new-student-dialog.component.css',
  // providers: [provideNativeDateAdapter()],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewStudentDialogComponent {
  newStudentForm: FormGroup;
  days: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  rooms: string[] = ['Dance', 'Computer Room', 'Rest', 'Library'];

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewStudentDialogComponent>
  ) {
    this.newStudentForm = this.fb.group({
      initials: ['', [Validators.required, Validators.maxLength(2)]],
      name: ['', Validators.required],
      parents: ['', Validators.required],
      room: ['', Validators.required],
      attendance: this.fb.array(
        this.days.map(() => false) 
      ),
    });
  }

  updateAttendance(index: number, value: boolean): void {
    this.attendanceControls.at(index).setValue(value);
  }

  get attendanceControls(): FormArray {
    return this.newStudentForm.get('attendance') as FormArray;
  }
  

  onCreate(): void {
    if (this.newStudentForm.valid) {
      const formValue = this.newStudentForm.value;
      const newStudent = {
        initials: formValue.initials,
        name: formValue.name,
        parents: formValue.parents,
        room: formValue.room,
        attendance: formValue.attendance,
      };
      
      this.dialogRef.close(newStudent);
      
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

}
