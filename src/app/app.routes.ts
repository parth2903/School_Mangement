import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './myComp/communication/communication.component';
import { CheckInOutComponent } from './myComp/check-in-out/check-in-out.component';
import { EventsComponent } from './myComp/events/events.component';
import { DailyActivityComponent } from './myComp/daily-activity/daily-activity.component';
import { FeeManagementComponent } from './myComp/fee-management/fee-management.component';
import { AuthorizePickupComponent } from './myComp/authorize-pickup/authorize-pickup.component';
import { IntegrationsComponent } from './myComp/integrations/integrations.component';
import { ReportsComponent } from './myComp/reports/reports.component';
import { FaqsComponent } from './myComp/faqs/faqs.component';
import { DashboardComponent } from './myComp/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { WhatNewComponent } from './myComp/what-new/what-new.component';
import { RoomManagementComponent } from './myComp/room-management/room-management.component';
import { EnrollmentComponent } from './myComp/enrollment/enrollment.component';
import { StudentManagementComponent } from './myComp/student-management/student-management.component';
import { StaffManagementComponent } from './myComp/staff-management/staff-management.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'check-in-out', component: CheckInOutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'daily-activity', component: DailyActivityComponent },
  { path: 'fee-management', component: FeeManagementComponent },
  { path: 'authorize-pickup', component: AuthorizePickupComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'wNew', component: WhatNewComponent },
  { path: 'school-management/room-management', component: RoomManagementComponent },
  { path: 'school-management/staff-management', component: StaffManagementComponent },
  { path: 'school-management/student-management', component: StudentManagementComponent },
  { path: 'school-management/enrollment', component: EnrollmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }