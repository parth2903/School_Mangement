import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSchoolManagementOpen = false;

  toggleSchoolManagement() {
    this.isSchoolManagementOpen = !this.isSchoolManagementOpen;
  }

  closeMenu(){
    this.isSchoolManagementOpen = !this.isSchoolManagementOpen;
  }
}
