import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  posts = [
    {author: "Amiah Burton", avatar : "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.", image: "https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
    {author: "Amiah Burton", avatar : "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", body: "Lorem ipsum dolor.", image: "https://images.unsplash.com/photo-1608831381472-3c4d35601ecc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"},
    {author: "Amiah Burton", avatar : "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", image: "https://images.unsplash.com/photo-1609004000524-8e41bd4bb72c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"},
    {author: "Amiah Burton", avatar : "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde.", image: "https://images.unsplash.com/photo-1608990953596-7d3412dbcfa5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzJ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
