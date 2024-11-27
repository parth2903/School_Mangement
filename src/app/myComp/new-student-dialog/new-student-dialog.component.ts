import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-new-student-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-student-dialog.component.html',
  styleUrl: './new-student-dialog.component.css',
})
export class NewStudentDialogComponent{
  newStudentForm: FormGroup;
  days: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  rooms: string[] = ['Dance', 'Computer Room', 'Rest', 'Library'];
  isEditMode = false;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student?: any }
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

    if (data?.student) {
      this.isEditMode = true;
      this.newStudentForm.patchValue({
        initials: data.student.initials,
        name: data.student.name,
        parents: data.student.parents,
        room: data.student.room,
        attendance: data.student.attendance,
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.newStudentForm.get(controlName);
    

    if (control?.hasError('required')) {
      return 'Field is required*';
    }
    if (control?.hasError('maxlength')) {
      return `${controlName} should have at most 2 letters*`;
    }
    return '';
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

  onSave(): void {
    if (this.newStudentForm.valid) {
      this.dialogRef.close(this.newStudentForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }


}