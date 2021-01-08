import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {

  isOpen = false;
  constructor() { }

  open(){ 
    if(!this.isOpen){
      this.isOpen = true
    }
  }

  clickedOutside(){
    if(this.isOpen){
      this.isOpen = false
    }
  }

}
