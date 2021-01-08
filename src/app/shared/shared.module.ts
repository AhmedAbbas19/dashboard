import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InpoxComponent } from './components/inpox/inpox.component';
import { PostComponent } from './components/post/post.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from "./directives/clickOutside.directive";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    InpoxComponent,
    PostComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
  imports: [CommonModule, RouterModule],
exports: [
    CommonModule,
    InpoxComponent,
    PostComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
})
export class SharedModule {}
