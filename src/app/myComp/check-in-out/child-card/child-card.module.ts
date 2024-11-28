import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildCardComponent } from "./child-card.component";

@NgModule({
  declarations:[ChildCardComponent],
  imports:[CommonModule],
  exports: [ChildCardComponent],
  providers:[]
})
export class ChildCardModule{}