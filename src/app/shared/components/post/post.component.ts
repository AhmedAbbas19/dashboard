import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input("post")post: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
