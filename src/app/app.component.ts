import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  sidebarOpen = false;
  userMenuOpen = false;
  sidebarMouseEnter = false;
  mobNavHidden = true;


  onMouseEnterSidebar(){
    if(!this.sidebarOpen){
      this.sidebarMouseEnter = true;
      this.sidebarOpen = true;
    }
  }

  onMouseLeaveSidebar(){
    if(this.sidebarMouseEnter){
      this.sidebarOpen = false;
      this.sidebarMouseEnter = false;
    }
  }

  openUserMenu(){
    console.log("Open Seseme!");
    
    if(!this.userMenuOpen){
      this.userMenuOpen = true
    }
  }

  clickedOutsideUserMenu(){
    console.log("clicked outside!");
    if(this.userMenuOpen){
      this.userMenuOpen = false
    }
  }
}

