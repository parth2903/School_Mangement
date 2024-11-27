import { NgModule } from "@angular/core";
import { CheckInOutComponent } from "./check-in-out.component";
import path from "path";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =[
  {
    path:'',
    component:CheckInOutComponent,
  }
]

@NgModule({
  declarations:[CheckInOutComponent],
  imports:[RouterModule.forChild(routes)],
  providers:[]
})
export class CheckInOutModule{

}