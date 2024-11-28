import { NgModule } from "@angular/core";
import { CheckInOutComponent } from "./check-in-out.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChildCardModule } from "./child-card/child-card.module";

const routes:Routes =[
  {
    path:'',
    component:CheckInOutComponent,
  }
]

@NgModule({
  declarations:[CheckInOutComponent],
  imports:[RouterModule.forChild(routes), CommonModule, ChildCardModule],
  providers:[]
})  
export class CheckInOutModule{}